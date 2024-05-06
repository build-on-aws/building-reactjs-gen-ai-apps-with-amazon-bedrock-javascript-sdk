import { useState, useRef } from "react"

import { Box, Spinner, Header, Container, SpaceBetween, Textarea, Button } from "@cloudscape-design/components"
import MessageList from "./MessageList"
import BedrockKBLoader from "./BedrockKBLoader"
import { ragBedrockKnowledgeBase } from "./llmLib"
import FMPicker from "./FMPicker"
import { buildContent } from "./messageHelpers"


export default () => {
    const [value, setValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [sessionId, setSessionId] = useState(null)
    const [messages, setMessages] = useState([])

    const childRef = useRef(null)
    const childRef2 = useRef(null)


    const sendText = async () => {
        setLoading(true)
        const currentKb = childRef.current.getSelectedOption()
        const currentModelId = childRef2.current.getModelId()
        let content = await buildContent(value, [])
        setValue("")
        setMessages(prev => [...prev, { role: "user", content: content }])

        const response = await ragBedrockKnowledgeBase(sessionId, currentKb.value, value, currentModelId)
        let text = response?.output?.text
        setSessionId(response.sessionId)

        let citations = response?.citations.map(citation => {
            return citation.retrievedReferences.map(reference => {
                let location = reference.location
                if (location.type == "S3") return location.s3Location.uri
            })
        })

        let references = []
        citations.forEach(citation => {
            if (citation) references.push(...citation)
        })
        const uniqueReferences = [...new Set(references)]

        uniqueReferences.forEach(ref => {
            text += `<br /><a href="${ref}" target="_blank">${ref}</a>`
        })
        let responseContent = await buildContent(text, [])
        setMessages(prev => [...prev, { role: "assistant", content: responseContent }])
        setLoading(false)
    }

    const processKeyUp = (keyCode) => { if (keyCode === 13) sendText() }

    return (

        <Container key={2} disableContentPaddings={false}
            header={<Header variant="h2">Conversacion</Header>}>

            <SpaceBetween size="xs">
                <BedrockKBLoader ref={childRef} key={10} />
                <FMPicker ref={childRef2} multimodal={true}key={2} />

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
                    key={4}
                    placeholder="Write something to the model..."
                    onChange={({ detail }) => { setValue(detail.value) }}
                    onKeyUp={event => processKeyUp(event.detail.keyCode)}
                    value={value}
                    disabled={loading}
                    inputMode="text" />
                <Button fullWidth key={5} loading={loading} onClick={sendText} variant="primary" >Enviar</Button>
            </SpaceBetween>


        </Container>
    )
}
