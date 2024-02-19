import { useEffect, useState, useRef } from "react"

import { Box, Spinner, Header, Container, SpaceBetween, Textarea, Button, Link} from "@cloudscape-design/components"
import MessageList from "./MessageList"
import { BufferMemory } from "langchain/memory";
import BedrockKBLoader from "./BedrockKBLoader";
import {ragBedrockKnowledgeBase} from "./llmLib"

// https://js.langchain.com/docs/modules/memory/types/buffer

const memory = new BufferMemory({ humanPrefix: "H" });

export default ({ llm }) => {
    const [chat, setChat] = useState([]);
    const [value, setValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [sessionId, setSessionId] = useState(null)

    const childRef = useRef(null);




    const changeHandler = ({ detail }) => { setValue(detail.value) }

    const sendText = async () => {
        setLoading(true)
        const currentKb = childRef.current.getSelectedOption()
        console.log(currentKb)
        setChat(prev => [...prev, { text: value, sender: "user", name: "Demo User" }])
        const response  = await ragBedrockKnowledgeBase(sessionId, currentKb.value, value)
        let text = response?.output?.text
        setSessionId(response.sessionId)

        let citations = response?.citations.map(citation =>{
            return citation.retrievedReferences.map(reference =>{
                let location = reference.location
                if (location.type == "S3") return location.s3Location.uri
            })
        })

        let references = []
        citations.forEach(citation =>{
            if (citation) references.push(...citation)
        })
        const uniqueReferences = [...new Set(references)]

        uniqueReferences.forEach(ref =>{
            text += `<br /><a href="${ref}" target="_blank">${ref}</a>`
        })

        setChat(prev => [...prev, { text: text, sender: "bot", name: "Demo Bot" }])
        setLoading(false)
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
