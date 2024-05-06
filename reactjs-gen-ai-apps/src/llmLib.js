import { fetchAuthSession } from 'aws-amplify/auth'
import { Bedrock } from "@langchain/community/llms/bedrock/web"
import { AmazonKnowledgeBaseRetriever } from "@langchain/community/retrievers/amazon_knowledge_base"
import { ConversationChain, ConversationalRetrievalQAChain } from "langchain/chains"
import { BedrockRuntimeClient, InvokeModelWithResponseStreamCommand } from "@aws-sdk/client-bedrock-runtime"
import { BedrockAgentClient, ListAgentAliasesCommand, ListAgentsCommand, ListKnowledgeBasesCommand } from "@aws-sdk/client-bedrock-agent"
import { BedrockAgentRuntimeClient, RetrieveAndGenerateCommand, RetrieveCommand, InvokeAgentCommand } from "@aws-sdk/client-bedrock-agent-runtime"
import { BedrockClient, ListFoundationModelsCommand } from "@aws-sdk/client-bedrock"


export const getModel = async (modelId = "anthropic.claude-instant-v1") => {
    const session = await fetchAuthSession()
    let region = session.identityId.split(":")[0]
    const model = new Bedrock({
        model: modelId,
        region: region,
        streaming: true,
        credentials: session.credentials,
        modelKwargs: { max_tokens_to_sample: 1000, temperature: 1 },
    })
    return model
}

export const invokeModelStreaming = async (body, modelId = "anthropic.claude-instant-v1", { callbacks }) => {
    const session = await fetchAuthSession()
    let region = session.identityId.split(":")[0]
    const client = new BedrockRuntimeClient({ region: region, credentials: session.credentials })
    const input = {
        body: JSON.stringify(body),
        contentType: "application/json",
        accept: "application/json",
        modelId: modelId
    }
    console.log(input)
    const command = new InvokeModelWithResponseStreamCommand(input)
    const response = await client.send(command)

    let decoder = new TextDecoder("utf-8")
    let completion = ""
    for await (const chunk of response.body) {
        const json_chunk = JSON.parse(decoder.decode(chunk.chunk.bytes))
        //console.log(json_chunk)
        let text = ""
        if (json_chunk.type === "content_block_start") text = json_chunk.content_block.text
        if (json_chunk.type === "content_block_delta") text = json_chunk.delta.text
        completion += text
        callbacks?.forEach(callback => {
            if (callback?.handleLLMNewToken) {

                callback.handleLLMNewToken(json_chunk)
            }
        })
        continue

    }
    return completion

}

export const getChain = (llm, memory) => {

    const chain = new ConversationChain({ llm: llm, memory: memory })
    chain.prompt.template = `The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know. 
Current conversation:
{history}

Human: {input}
Assistant:`
    return chain
}


export const getBedrockKnowledgeBases = async () => {
    const session = await fetchAuthSession()
    let region = session.identityId.split(":")[0]
    const client = new BedrockAgentClient({ region: region, credentials: session.credentials })
    const command = new ListKnowledgeBasesCommand({})
    const response = await client.send(command)
    return response.knowledgeBaseSummaries
}


export const getBedrockAgents = async () => {
    const session = await fetchAuthSession()
    let region = session.identityId.split(":")[0]

    const client = new BedrockAgentClient({ region: region, credentials: session.credentials })
    const command = new ListAgentsCommand({})
    const response = await client.send(command)

    const agentWithAliases = await Promise.all(response.agentSummaries.map(async agent => {
        const aliases = await getBedrockAgentAliases(client, agent)
        agent.aliases = aliases
        return agent
    }))
    return agentWithAliases
}



export const getBedrockAgentAliases = async (client, agent) => {
    const agentCommand = new ListAgentAliasesCommand({ agentId: agent.agentId })
    const response = await client.send(agentCommand)
    return response.agentAliasSummaries
}



export const ragBedrockKnowledgeBase = async (sessionId, knowledgeBaseId, query, modelId = "anthropic.claude-instant-v1") => {
    const session = await fetchAuthSession()
    let region = session.identityId.split(":")[0]

    const client = new BedrockAgentRuntimeClient({ region: region, credentials: session.credentials })
    const input = {
        input: { text: query },
        retrieveAndGenerateConfiguration: {
            type: "KNOWLEDGE_BASE",
            knowledgeBaseConfiguration: {
                knowledgeBaseId: knowledgeBaseId,
                modelArn: `arn:aws:bedrock:${region}::foundation-model/${modelId}`
            },
        }
    }

    if (sessionId) {
        input.sessionId = sessionId
    }

    const command = new RetrieveAndGenerateCommand(input)

    try {
        const response = await client.send(command);
        return response;

    } catch (error) {
        return { output: { text: "Error: " + error.message }, citations: [], sessionId }
    }

}

export const invokeBedrockAgent = async (sessionId, agentId, agentAlias, query) => {
    const session = await fetchAuthSession()
    let region = session.identityId.split(":")[0]

    const client = new BedrockAgentRuntimeClient({ region: region, credentials: session.credentials })
    const input = {
        sessionId: sessionId,
        agentId: agentId,
        agentAliasId: agentAlias,
        inputText: query
    }

    console.log(input)

    const command = new InvokeAgentCommand(input)
    const response = await client.send(command,)
    console.log("response:", response)

    let completion = ""

    /*     for await (const chunk of stream) {
            console.log(chunk)
        } */

    let decoder = new TextDecoder("utf-8")
    for await (const chunk of response.completion) {
        console.log("chunk:", chunk)
        const text = decoder.decode(chunk.chunk.bytes)
        completion += text
        console.log(text)
    }

    return completion

}


export const retrieveBedrockKnowledgeBase = async (knowledgeBaseId, query) => {
    const session = await fetchAuthSession()
    let region = session.identityId.split(":")[0]

    const client = new BedrockAgentRuntimeClient({ region: region, credentials: session.credentials })
    const input = { // RetrieveRequest
        knowledgeBaseId: knowledgeBaseId, // required
        retrievalQuery: { // KnowledgeBaseQuery
            text: query, // required
        },
        retrievalConfiguration: { // KnowledgeBaseRetrievalConfiguration
            vectorSearchConfiguration: { // KnowledgeBaseVectorSearchConfiguration
                numberOfResults: 5, // required
            },
        }
    }


    const command = new RetrieveCommand(input)
    const response = await client.send(command)
    return response
}


export const getBedrockKnowledgeBaseRetriever = async (knowledgeBaseId) => {
    const session = await fetchAuthSession()
    let region = session.identityId.split(":")[0]
    const retriever = new AmazonKnowledgeBaseRetriever({
        topK: 10,
        knowledgeBaseId: knowledgeBaseId,
        region: region,
        clientOptions: { credentials: session.credentials }
    })

    return retriever
}


export const getConversationalRetrievalQAChain = async (llm, retriever, memory) => {


    const chain = ConversationalRetrievalQAChain.fromLLM(
        llm, retriever = retriever)
    chain.memory = memory

    chain.questionGeneratorChain.prompt.template = "Human: " + chain.questionGeneratorChain.prompt.template + "\nAssistant:"

    chain.combineDocumentsChain.llmChain.prompt.template = `Human: Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer. 

{context}

Question: {question}
Helpful Answer:
Assistant:`

    return chain
}


export const getFMs = async () => {
    const session = await fetchAuthSession()
    let region = session.identityId.split(":")[0]
    const client = new BedrockClient({ region: region, credentials: session.credentials })
    const input = { byProvider: "Anthropic", byOutputModality: "TEXT",byInferenceType: "ON_DEMAND"}
    const command = new ListFoundationModelsCommand(input)
    const response = await client.send(command)
    return response.modelSummaries
}