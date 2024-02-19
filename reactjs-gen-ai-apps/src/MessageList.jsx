import * as React from "react"


import Container from "@cloudscape-design/components/container"
import Grid from "@cloudscape-design/components/grid"
import { Box, Button } from "@cloudscape-design/components"
import SpaceBetween from "@cloudscape-design/components/space-between"


const UserMessage = ({ msg }) =>
    <Grid
        disableGutters
        gridDefinition={[{ colspan: 11, offset: 1 }, { colspan: 5, offset: 7 }]}>
        <Container data-sender="user">
            <Grid
                disableGutters
                gridDefinition={[{ colspan: 1, }, { colspan: 11, }]}>

                <Button iconName="user-profile" variant="primary" />
                <div className="user-message" > {msg.text} </div>
            </Grid>
        </Container>
        {/* <Box float="right" padding={{ right: "l" }} ><em>{msg.name}</em></Box> */}
    </Grid>


const BotMessage = ({ msg }) => {
    const paragraphs = msg.text.split("\n")
    const html_msg = paragraphs.map(par => par !== "" ? "<p>" + par + "</p>" : par).join("")
    console.log(msg)
    return (<Grid
        disableGutters
        gridDefinition={[{ colspan: 11, }, { colspan: 7, }]}>
        <Container variant="stacked"
            data-sender="bot"
        > <Grid
            disableGutters
            gridDefinition={[{ colspan: 1, }, { colspan: 11, }]}>
                <Button iconName="gen-ai" variant="primary" />
                <div className="bot-message" dangerouslySetInnerHTML={{ __html: msg.text }} >
                </div>
            </Grid>
        </Container>
        {/* <Box padding={{ left: "l" }} ><em>{msg.name}</em></Box> */}
    </Grid>)
}




const SystemMessage = ({ msg }) => {

    const paragraphs = msg.text.split("\n")
    const html_msg = paragraphs.map(par => <p>{par}</p>)
    return (
        <Grid
            disableGutters
            gridDefinition={[{ colspan: 11, }, { colspan: 5 }]}>
            <Container data-sender="system" >            <div dangerouslySetInnerHTML={{ __html: html_msg }} />
            </Container>
            <Box float="right" padding={{ right: "l" }} ><em>{msg.name}</em></Box>
        </Grid>
    )
}




const ChatMessage = ({ msg }) => {
    const sender = msg.sender
    if (sender === "user") return <UserMessage msg={msg} />
    if (sender === "bot") return <BotMessage msg={msg} />
    if (sender === "system") return <SystemMessage msg={msg} />
}


const MessageList = ({ messages }) => {
    return  <SpaceBetween  size="xs">{messages.map(msg => <ChatMessage key={msg.text} msg={msg} />)}</SpaceBetween>
}

export default MessageList