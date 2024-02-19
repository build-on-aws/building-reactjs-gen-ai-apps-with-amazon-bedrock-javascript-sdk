import { useEffect, useState, useRef } from "react"

import { Box, Spinner, Header, Container, SpaceBetween, Textarea, Button, Link } from "@cloudscape-design/components"
import MessageList from "./MessageList"
import { BufferMemory } from "langchain/memory";
import BedrockKBLoader from "./BedrockKBLoader";
import { getBedrockKnowledgeBaseRetriever, getConversationalRetrievalQAChain } from "./llmLib"

// https://js.langchain.com/docs/modules/memory/types/buffer

const memory = new BufferMemory({ humanPrefix: "H",  memoryKey:"chat_history"});

export default ({ llm }) => {
    const [chat, setChat] = useState([]);
    const [value, setValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [llmResponse, setLLMResponse] = useState("")

    const childRef = useRef(null);
    const changeHandler = ({ detail }) => { setValue(detail.value) }

    const handleLLMNewToken = (token) => {
        setLLMResponse(msg => msg + token.replace(/\n/g, "<br />"))
        if (token === "") {
            setLLMResponse(msg => {
                setChat(prev => [...prev, { text: msg, sender: "bot", name: "Demo Bot" }])
                return ""
            })
            setLoading(false)
        }
    }


    const sendText = async () => {
        setLoading(true)
        const currentKb = childRef.current.getSelectedOption()
        setChat(prev => [...prev, { text: value, sender: "user", name: "Demo User" }])
        const retriever = await getBedrockKnowledgeBaseRetriever(currentKb.value)
        const chain = await getConversationalRetrievalQAChain(llm,retriever,memory)
        const res = await chain.invoke({ question: value}, { callbacks: [{ handleLLMNewToken }] })
        setValue("")    
    }

    const processKeyUp = (keyCode) => { if (keyCode === 13) sendText() }

    return (

        <Container key={2} disableContentPaddings={false}
            header={<Header variant="h2">Conversacion</Header>}>

            <SpaceBetween size="xs">
                <BedrockKBLoader ref={childRef} key={1} />

                <Box data-id="chat-window">
                    {
                        chat.length ?
                            <Container fitHeight>
                                <MessageList messages={chat} />
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
                    placeholder="Escribe algo al modelo..."
                    onChange={changeHandler}
                    onKeyUp={event => processKeyUp(event.detail.keyCode)}
                    value={value}
                    disabled={loading}
                    inputMode="text" />
                <Button fullWidth key={2} loading={loading} onClick={sendText} variant="primary" >Enviar</Button>
            </SpaceBetween>


        </Container>
    )
}
