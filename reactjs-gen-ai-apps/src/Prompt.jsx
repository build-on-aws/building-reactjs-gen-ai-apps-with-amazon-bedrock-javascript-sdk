import { PromptUpdateForm } from './ui-components'
import { Loader } from "@aws-amplify/ui-react"
import { useParams } from "react-router-dom"
import BasicNewForm from "./BasicNewForm"

import { useRef, useEffect, useState } from 'react'

import { fetchById } from './fetchHelper'



export default () => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const childRef = useRef(null);
    const onSuccess = (e) => childRef.current.showMessage(
        e, "success", "Success", "Updated in the Database!")
    const onError = (e) => childRef.current.showMessage(
        e, "error", "Error", "Error updating!")

    let { PromptId } = useParams()

    const getModel = async (Id) => {
        const model = await fetchById("getPrompt", Id)
        console.log(model)
        setData(model)
        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true)
        console.log("PromptId", PromptId)
        getModel(PromptId)

    }, [PromptId])



    return (
        <BasicNewForm ref={childRef} headerText={data.name}>
            {isLoading ? <Loader size="large" variation="linear" /> :
                <PromptUpdateForm key={1} prompt={data} 
                    onSuccess={onSuccess}
                    onError={onError}
                />}


        </BasicNewForm>
    )
}