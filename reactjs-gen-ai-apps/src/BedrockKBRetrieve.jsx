import {useState, useRef } from "react"

import { Box, Spinner, Header, Container, SpaceBetween, Textarea, Button } from "@cloudscape-design/components"
import MessageList from "./MessageList"
import BedrockKBLoader from "./BedrockKBLoader";
import { getBedrockKnowledgeBaseRetriever } from "./llmLib"
import FMPicker from "./FMPicker";
import { answerQuestionWithContext, getStandaloneQuestion } from "./questionGenerator";
import { buildContent, handleStreamingTokenResponse } from "./messageHelpers";
import { filterDocsByScore } from "./questionGenerator";

export default () => {

    const [value, setValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [llmResponse, setLLMResponse] = useState("")
    const [messages, setMessages] = useState([])

    const childRef = useRef(null);
    const childRef2 = useRef(null);
    const childRef3 = useRef(null);


    const handleLLMNewToken = ({ type, content_block, delta }) => {
        handleStreamingTokenResponse({ type, content_block, delta }, setLLMResponse, setMessages, setLoading)
    }


    const sendText = async () => {
        setLoading(true)
        let currentKb = childRef.current.getSelectedOption()
        let currentModelId = childRef2.current.getModelId()
        let content = await buildContent(value, [])
        setValue("")
        setMessages(prev => [...prev,{ role: "user", content: content }])
        const question = await getStandaloneQuestion({modelId:currentModelId, messages:messages,  question:  value})
        console.log("standalone question:", question)
        setLLMResponse(msg => msg + `Entendí: <strong>${question}</strong><br/>`)

        const retriever = await getBedrockKnowledgeBaseRetriever(currentKb.value)
        const docs = await retriever.invoke(question)   

        let minScore = 0.5
        const filteredDocs = filterDocsByScore(docs, minScore)
        console.log(" docs:", docs)
        if (filteredDocs.length === 0) {
            let nodocs_msg = "I'm sorry. No Documents, so I don't know the answer to that question."
            setLLMResponse(msg => msg + `${nodocs_msg}`)
        } else {
            const answer  =  await answerQuestionWithContext({question: question, docs: filteredDocs,   callbacks: [{ handleLLMNewToken }]})
            console.log(answer)
        }

        childRef3.current.focus()
    }


    const processKeyUp = (keyCode) => { if (keyCode === 13) sendText() }

    return (

        <Container key={2} disableContentPaddings={false}
            header={<Header variant="h2">Conversacion</Header>}>

            <SpaceBetween size="xs">
                <BedrockKBLoader ref={childRef} key={1} />
                <FMPicker ref={childRef2} multimodal={true} key={3} />

                <Box data-id="chat-window">
                    {
                        messages.length ?
                            <Container fitHeight>
                                <MessageList messages={messages} />
                                {loading ? <Spinner /> : null}
                            </Container>
                            : null

                    }
                </Box>
                {
                    llmResponse !== "" ?
                        <Container fitHeight header={<strong>Respuesta LLM</strong>}>
                            <div dangerouslySetInnerHTML={{ __html: llmResponse }} />
                        </Container> :
                        null
                }
                <Textarea
                    fitHeight
                    onBlur={childRef3?.current?.focus()}
                    ref={childRef3}
                    placeholder="Escribe algo al modelo..."
                    onChange={({ detail }) => {setValue(detail.value) }}
                    onKeyUp={event => processKeyUp(event.detail.keyCode)}
                    value={value}
                    autoFocus
                    disabled={loading}
                    inputMode="text" />
                <Button fullWidth key={2} loading={loading} onClick={sendText} variant="primary" >Enviar</Button>
            </SpaceBetween>


        </Container>
    )
}
