import {useState, useRef } from "react"

import { Box, Spinner, Header, Container, SpaceBetween, Textarea, Button} from "@cloudscape-design/components"
import MessageList from "./MessageList"
import BedrockAgentLoader from "./BedrockAgentLoader";
import {invokeBedrockAgent} from "./llmLib"
import { buildContent } from "./messageHelpers"


// create uuid
const createId = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}




export default () => {
    const [value, setValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [sessionId, setSessionId] = useState(createId())
    const [messages, setMessages] = useState([])


    const childRef = useRef(null);

    const changeHandler = ({ detail }) => { setValue(detail.value) }

    const sendText = async () => {
        setLoading(true)
        const currentAgent = childRef.current.getSelectedOption()
        console.log(currentAgent)
        let content = await buildContent(value, [])
        setValue("")
        setMessages(prev => [...prev, { content: content, role: "user" }])
        const response  = await invokeBedrockAgent(sessionId, currentAgent.value.agentId, currentAgent.value.alias.agentAliasId, value)

        let responseContent = await buildContent(response, [])

        setMessages(prev => [...prev, { content: responseContent, role: "assistant" }])
        setLoading(false)
        setValue("")
    }



    return (

        <Container key={2} disableContentPaddings={false}
            header={<Header variant="h2">Conversacion</Header>}>

            <SpaceBetween size="xs">
                <BedrockAgentLoader ref={childRef} key={1} />

                <Box data-id="chat-window" key={3}>
                    {
                        messages.length ?
                            <Container fitHeight>
                                <MessageList messages={messages} />
                                {loading ? <Spinner /> : null}
                            </Container>
                            : null

                    }
                </Box>
                <Textarea
                    fitHeight
                    placeholder="Escribe algo al agente..."
                    onChange={changeHandler}
                    value={value}
                    disabled={loading}
                    inputMode="text" />
                <Button fullWidth key={2} loading={loading} onClick={sendText} variant="primary" >Enviar</Button>
            </SpaceBetween>


        </Container>
    )
}
