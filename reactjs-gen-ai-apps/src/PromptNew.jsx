
import BasicNewForm from "./BasicNewForm"
import {useRef } from 'react';
import { useNavigate } from "react-router-dom";

import {PromptCreateForm}   from './ui-components';

export default () => {
    let navigate = useNavigate()

    const childRef = useRef(null);
    const onSuccess = (e) => {
        childRef.current.showMessage(e, "success", "Exito", "Creado en la Base de datos!")
        navigate(`/prompt/${e.id}`)
    }
    const onError = (e) => childRef.current.showMessage(e, "error", "Error", "Error creando en la Base de datos!")

    return (
        <BasicNewForm ref={childRef} headerText={"New Prompt"}>
            <PromptCreateForm
                onSuccess={onSuccess}
                onError={onError}
            />
        </BasicNewForm>
    )
}