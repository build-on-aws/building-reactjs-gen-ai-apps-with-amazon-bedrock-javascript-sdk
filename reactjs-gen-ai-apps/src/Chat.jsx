import { useEffect, useState } from "react"

import { Box, Spinner, Header, Container, SpaceBetween, Textarea, Button } from "@cloudscape-design/components"
import MessageList from "./MessageList"
import { BufferMemory } from "langchain/memory";
import { getChain } from "./llmLib";

// https://js.langchain.com/docs/modules/memory/types/buffer

const memory = new BufferMemory({ humanPrefix: "H" });

export default ({ llm }) => {
    const [chat, setChat] = useState([]);
    const [value, setValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [llmResponse, setLLMResponse] = useState("")
    const [chain, setChain] = useState(null)

    useEffect(() => {
        if (llm?.credentials) {
            const chain = getChain(llm, memory)
            setChain(chain)
        }
    }, [llm])



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



    const changeHandler = ({ detail }) => { setValue(detail.value) }

    const sendText = async () => {
        setLoading(true)
        chain.invoke({ input: value }, { callbacks: [{ handleLLMNewToken }] })
        setChat(prev => [...prev, { text: value, sender: "user", name: "Demo User" }])
        setValue("")
    }

    const processKeyUp = (keyCode) => { if (keyCode === 13) sendText() }

    return (

        <Container
            header={<Header variant="h2">Conversacion</Header>}>
            <Box  data-id="chat-window">
                {
                    chat.length ?
                        <Container fitHeight>
                            <MessageList messages={chat} />
                            {loading ? <Spinner /> : null}
                        </Container>
                        : null

                }

            </Box>
            <SpaceBetween size="xs">
                {
                    llmResponse !== "" ?
                        <Container fitHeight header={<strong>Respuesta LLM</strong>}>
                            <div dangerouslySetInnerHTML={{ __html: llmResponse }} />
                        </Container> :
                        null
                }
                <Textarea
                    fitHeight
                    placeholder="Write something..."
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
