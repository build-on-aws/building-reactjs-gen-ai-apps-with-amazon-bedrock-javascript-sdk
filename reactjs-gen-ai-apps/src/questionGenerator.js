import { invokeModelStreaming } from "./llmLib"
import { getMessageList } from "./messageHelpers"

export const questionGenerator = async ({ modelId, messages, question, callbacks }) => {
    const newMessages = [...messages, { role: "user", content: [{ type: "text", text: question }] }]
    const body = {
        "messages": newMessages,
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 200,
        "system": "Given the following conversation, rephrase the last question to be a standalone question. Your answer must be only the question with no preamble."
    }
    const response = await invokeModelStreaming(body, modelId, { callbacks })
    return response
}

const getContextFromDoc = (doc) => {
    let page = doc.metadata?.page ? ` Pag ${doc.metadata.page}` : ""
    let source = doc.metadata?.source ? `<source>${doc.metadata.source}${page}</source>` : ""
    return `<document>${doc.pageContent}${page}<document>`
}

export const answerQuestionWithContextFromMemory = async ({ modelId, docs, question, callbacks }) => {
    const newMessages = [{ role: "user", content: [{ type: "text", text: question }] }]

    const filteredDocs = docs.filter(doc => doc[1] >= minScore)
    console.log(`Docs with score greater than ${minScore}: ${filteredDocs.length}`)


    let context = docs.map(doc => getContextFromDoc(doc[0])).join("\n")
    let system = `Use the following pieces of documents to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer. \n\n${context}. Provide sources (in the <source> tags within your response)`
    //console.log("context:", context)

    const body = {
        "messages": newMessages,
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 1000,
        "system": system
    }
    const response = await invokeModelStreaming(body, modelId, { callbacks })
    return response
}

export const filterDocsByScore = (docs, minScore) => docs.filter(doc => {
    console.log("doc.metadata?.score:", doc.metadata?.score)
    if (doc.metadata?.score ){
        return doc.metadata.score >= minScore
    } 
    return true
})


export const answerQuestionWithContext = async ({ modelId, docs, question, callbacks }) => {
    const newMessages = [{ role: "user", content: [{ type: "text", text: question }] }]


    let context = docs.map(doc => getContextFromDoc(doc)).join("\n")
    let system = `Use the following pieces of documents to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer. \n\n${context}. Provide sources (in the <source> tags within your response)`
    console.log("context:", context)

    const body = {
        "messages": newMessages,
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 1000,
        "system": system
    }
    const response = await invokeModelStreaming(body, modelId, { callbacks })
    return response
}

export const getStandaloneQuestion = async ({ modelId, messages, question, callbacks }) => {
    const standaloneQ = await questionGenerator({
        modelId: modelId, messages: messages, question: question, callbacks: callbacks
    })
    return standaloneQ
}


