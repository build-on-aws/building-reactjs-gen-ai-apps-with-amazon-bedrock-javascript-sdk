import {useState, useRef } from "react"

import { Box, Spinner, Header, Container, SpaceBetween, Textarea, Button} from "@cloudscape-design/components"
import MessageList from "./MessageList"
import BedrockAgentLoader from "./BedrockAgentLoader";
import {invokeBedrockAgent} from "./llmLib"

// create uuid
const createId = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}




export default () => {
    const [chat, setChat] = useState([]);
    const [value, setValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [sessionId, setSessionId] = useState(createId())

    const childRef = useRef(null);

    const changeHandler = ({ detail }) => { setValue(detail.value) }

    const sendText = async () => {
        setLoading(true)
        const currentAgent = childRef.current.getSelectedOption()
        console.log(currentAgent)
        setChat(prev => [...prev, { text: value, sender: "user", name: "Demo User" }])
        const response  = await invokeBedrockAgent(sessionId, currentAgent.value.agentId, currentAgent.value.alias.agentAliasId, value)

        let text = response

        setChat(prev => [...prev, { text: text, sender: "bot", name: "Demo Bot" }])
        setLoading(false)
        setValue("")
    }

    const processKeyUp = (keyCode) => { if (keyCode === 13) sendText() }

    return (

        <Container key={2} disableContentPaddings={false}
            header={<Header variant="h2">Chat</Header>}>

            <SpaceBetween size="xs">
                <BedrockAgentLoader ref={childRef} key={1} />

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
                <Textarea
                    fitHeight
                    placeholder="Escribe algo al agente..."
                    onChange={changeHandler}
                    onKeyUp={event => processKeyUp(event.detail.keyCode)}
                    value={value}
                    disabled={loading}
                    inputMode="text" />
                <Button fullWidth key={2} loading={loading} onClick={sendText} variant="primary" >Send</Button>
            </SpaceBetween>


        </Container>
    )
}
