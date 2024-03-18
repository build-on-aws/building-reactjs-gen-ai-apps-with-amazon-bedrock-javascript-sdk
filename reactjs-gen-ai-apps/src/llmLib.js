import { fetchAuthSession } from 'aws-amplify/auth';
import { Bedrock } from "@langchain/community/llms/bedrock/web";
import { AmazonKnowledgeBaseRetriever } from "@langchain/community/retrievers/amazon_knowledge_base";
import { ConversationChain, ConversationalRetrievalQAChain } from "langchain/chains";
import { BedrockAgentClient, ListAgentAliasesCommand, ListAgentsCommand, ListKnowledgeBasesCommand } from "@aws-sdk/client-bedrock-agent"
import { BedrockAgentRuntimeClient, RetrieveAndGenerateCommand, RetrieveCommand, InvokeAgentCommand } from "@aws-sdk/client-bedrock-agent-runtime"



export const getModel = async () => {
    const session = await fetchAuthSession(); //To get user credential from React
    const model = new Bedrock({
        model: "anthropic.claude-instant-v1",
        region: "us-east-1",
        streaming: true,
        credentials: session.credentials,
        modelKwargs: { max_tokens_to_sample: 1000, temperature: 1 },
    });
    return model;
};


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
    const client = new BedrockAgentClient({ region: "us-east-1", credentials: session.credentials })
    const command = new ListKnowledgeBasesCommand({})
    const response = await client.send(command)
    return response.knowledgeBaseSummaries
}


export const ragBedrockKnowledgeBase = async (sessionId, knowledgeBaseId, query) => {
    const session = await fetchAuthSession()
    const client = new BedrockAgentRuntimeClient({ region: "us-east-1", credentials: session.credentials });
    const input = {
        input: { text: query },
        retrieveAndGenerateConfiguration: {
            type: "KNOWLEDGE_BASE",
            knowledgeBaseConfiguration: {
                knowledgeBaseId: knowledgeBaseId,
                modelArn: "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-v2:1", // required
            },
        }
    }

    if (sessionId) {
        input.sessionId = sessionId
    }

    const command = new RetrieveAndGenerateCommand(input);
    const response = await client.send(command)
    return response
}



export const retrieveBedrockKnowledgeBase = async (knowledgeBaseId, query) => {
    const session = await fetchAuthSession()
    const client = new BedrockAgentRuntimeClient({ region: "us-east-1", credentials: session.credentials });
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


    const command = new RetrieveCommand(input);
    const response = await client.send(command)
    return response
}


export const getBedrockKnowledgeBaseRetriever = async (knowledgeBaseId) => {
    const session = await fetchAuthSession();

    const retriever = new AmazonKnowledgeBaseRetriever({
        topK: 10,
        knowledgeBaseId: knowledgeBaseId,
        region: "us-east-1",
        clientOptions: { credentials: session.credentials }
    })

    return retriever

}


export const getConversationalRetrievalQAChain = async (llm, retriever, memory) => {


    const chain = ConversationalRetrievalQAChain.fromLLM(
        llm, retriever = retriever)
    chain.memory = memory

    chain.questionGeneratorChain.prompt.template = "Human: " + chain.questionGeneratorChain.prompt.template +"\nAssistant:"

    chain.combineDocumentsChain.llmChain.prompt.template = `Human: Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer. 

{context}

Question: {question}
Helpful Answer:
Assistant:`

return chain
}


export const getBedrockAgents = async () => {
    const session = await fetchAuthSession()
    const client = new BedrockAgentClient({ region: "us-east-1", credentials: session.credentials })
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

export const invokeBedrockAgent = async (sessionId, agentId, agentAlias, query) => {
    const session = await fetchAuthSession()
    const client = new BedrockAgentRuntimeClient({ region: "us-east-1", credentials: session.credentials })
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