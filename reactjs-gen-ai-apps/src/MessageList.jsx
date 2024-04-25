import * as React from "react"
import { Box, CopyToClipboard, Grid, Container, SpaceBetween } from "@cloudscape-design/components"
import { marked, options } from "marked";

let config = { startOnLoad: true, flowchart: { useMaxWidth: false, htmlLabels: true } };


const renderer = new marked.Renderer();

renderer.code =  function (code, language) {
    console.log(language)
    if (code.match(/^sequenceDiagram/) || code.match(/^graph/)) {
        return '<pre class="mermaid">' + code + '</pre>';
    } else {
        return '<pre><code>' + code + '</code></pre>';
    }
};


const UserMessage = ({ msg }) => {
    const contentJSX = msg.content.map((item, i) => {

        if (item.type === "text") {
            //const html_msg = converter.makeHtml(item.text)
            const html_msg = marked.parse(item.text, {renderer: renderer})

            return <div key={i} dangerouslySetInnerHTML={{ __html: html_msg }} ></div>
        }
        if (item.type === "image") {
            let src = `data:${item.source.media_type};${item.source.type},${item.source.data}`
            return <img key={i} width={700} src={src} />
        }

    })

    return (
        <Grid
            disableGutters
            gridDefinition={[{ colspan: 11, offset: 1 }, { colspan: 5, offset: 7 }]}>
            <Container data-sender="user">
                {contentJSX}
            </Container>
        </Grid>
    )
}


const BotMessage = ({ msg }) => {
    const contentJSX = msg.content.map((item, i) => {

        if (item.type === "text") {
            //const html_msg = item.text.replace(/\n/g, "<br />")
            //const html_msg = converter.makeHtml(item.text);
            const html_msg = marked.parse(item.text, {renderer: renderer})


            return [
                <CopyToClipboard key={1} copyButtonText="Copy html" copySuccessText="copied!" textToCopy={html_msg} />,
                <CopyToClipboard key={2} copyButtonText="Copy raw" copySuccessText="copied!" textToCopy={item.text} />,
                <div key={i} className="bot-message" dangerouslySetInnerHTML={{ __html: html_msg }} ></div>]
        }
        if (item.type === "image") {
            let src = `data:${item.source.media_type};${item.source.type},${item.source.data}`
            return <img key={i} width={700} src={src} />
        }

    })
    return (<Grid
        disableGutters
        gridDefinition={[{ colspan: 11, }, { colspan: 7, }]}>
        <Container variant="stacked" data-sender="bot" header={<strong>Respuesta LLM</strong>}>
            {contentJSX}
        </Container>
    </Grid>)
}



const SystemMessage = ({ msg }) => {
    const html_msg = msg.text.replace(/\n/g, "<br />")
    return (
        <Grid
            disableGutters
            gridDefinition={[{ colspan: 11, }, { colspan: 5 }]}>
            <Container data-sender="system" >
                <div dangerouslySetInnerHTML={{ __html: html_msg }} />
            </Container>
            <Box float="right" padding={{ right: "l" }} ><em>{msg.name}</em></Box>
        </Grid>
    )
}




const ChatMessage = ({ msg, key }) => {
    const role = msg.role
    if (role === "user") return <UserMessage key={key} msg={msg} />
    if (role === "assistant") return <BotMessage key={key} msg={msg} />
    if (role === "system") return <SystemMessage key={key} msg={msg} />
}


const MessageList = ({ messages }) => {
    return <SpaceBetween size="xs">{messages.map((msg, i) => <ChatMessage key={i} msg={msg} />)}</SpaceBetween>
}

export default MessageList