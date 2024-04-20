import Box from "@cloudscape-design/components/box"
import Header from "@cloudscape-design/components/header"
import Container from "@cloudscape-design/components/container"
import SpaceBetween from "@cloudscape-design/components/space-between"
import Button from "@cloudscape-design/components/button"
import BasicTable from "./BasicTable"
import { useNavigate } from "react-router-dom"
import { Loader } from "@aws-amplify/ui-react"


export default ({ headerText, itemList,
    columnDefinitions, columnDisplay, isLoading = false, newEnabled = true, rowClickable = true, navPrefix = "" }) => {

    let navigate = useNavigate()

    const newItem = () => { navigate(navPrefix + "new") }

    const itemClick = (e) => {
        //console.log("item click", e)
        if (!rowClickable) return;
        navigate(navPrefix + `${e.detail.item.id}`)
    }

    return (
        <Box>
            <Container
                header={
                    <Header
                        actions={<SpaceBetween direction="horizontal" size="xs">
                            {newEnabled ? <Button onClick={newItem} >Nuevo +</Button> : null}
                        </SpaceBetween>
                        }>
                        {headerText}
                    </Header>
                }>
                {isLoading ? <Loader size="large" variation="linear" /> :
                    <BasicTable itemList={itemList} columnDefinitions={columnDefinitions} columnDisplay={columnDisplay} rowClick={itemClick} />
                }
            </Container>
        </Box>
    )
}