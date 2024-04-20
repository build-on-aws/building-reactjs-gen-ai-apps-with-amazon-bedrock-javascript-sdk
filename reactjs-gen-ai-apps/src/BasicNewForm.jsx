
import {Container, Header, Box, } from "@cloudscape-design/components"
import { useRef, forwardRef, useImperativeHandle } from 'react'
import FlashBar from './FlashBar'

export default forwardRef(({ headerText, children }, ref) => {

    const childRef = useRef(null);

    useImperativeHandle(ref, () => ({
        showMessage(e, messageType, messageTitle, messageText) {
            childRef.current.showMessage(e, messageType, messageTitle, messageText)
        }
    }))
    return (
        <Box >
            <Container
                isRequired
                header={<Header variant="h2" description="">
                    {headerText}</Header>}>
                <FlashBar ref={childRef} />
                {children}
            </Container>
        </Box >
    )
})