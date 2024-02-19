import { useState } from "react"
import { Box, Spinner,Header,Container,SpaceBetween, Textarea, Button } from "@cloudscape-design/components"
import MessageList from "./MessageList"

export default ({llm}) => {
    const [chat, setChat] = useState([]);
    const [value, setValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [llmResponse, setLLMResponse] = useState("")

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

    const changeHandler = ({ detail }) => {setValue(detail.value)}
    // The changeHandler function is called when the user types in the textarea.

    // code block is making an API call to an AI language model (LLM) to get responses from it.
    // It is using the llm.invoke method to pass the user's input value, prefixed with 
    // "Human:" and suffixed with "Assistant:", to the LLM.
    // because the model used is Anthropic's Claude

    const sendText = async () => {
        setLoading(true)
        setChat(prev => [...prev, { text: value, sender: "user", name: "Demo User" }])
        llm.invoke(`Human:\n ${value}\nAssistant:`, { callbacks: [{ handleLLMNewToken }] })
        setValue("")
    }

    const processKeyUp = (keyCode) => {if (keyCode === 13) sendText()}

    return (

        <Container
            header={<Header variant="h2">Conversacion</Header>}>
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
            <SpaceBetween size="xs">
                {
                    llmResponse !== "" ?
                        <Container fitHeight header={<strong>Answer</strong>}>
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
