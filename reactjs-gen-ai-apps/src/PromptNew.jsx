
import BasicNewForm from "./BasicNewForm"
import {useRef } from 'react';
import { useNavigate } from "react-router-dom";

import PromptCreateForm   from './PromptCreateFormV2';

//todo: fix new prompt ID

export default () => {
    let navigate = useNavigate()

    const childRef = useRef(null);
    const onSuccess = (e) => {
        console.log(e)
        childRef.current.showMessage(e, "success", "Success", "Created in Database!")
        navigate(`/prompt/${e.id}`)
    }
    const onError = (e) => childRef.current.showMessage(e, "error", "Error", "Error creating in the Database!")

    return (
        <BasicNewForm ref={childRef} headerText={"New Prompt"}>
            <PromptCreateForm
                onSuccess={onSuccess}
                onError={onError}
            />
        </BasicNewForm>
    )
}