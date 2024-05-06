import { getFMs } from "./llmLib"
import { useState, useEffect, forwardRef, useImperativeHandle } from "react"
import {SegmentedControl, FormField} from "@cloudscape-design/components"


const FMPicker = forwardRef(({ multimodal }, ref) => {
    const [selectedId, setSelectedId] = useState("Model 1")
    const [models, setModels] = useState([{ modelId: "Model 1"}, { modelId: "Model 1" }, { modelId: "Model 1"}])


    useImperativeHandle(ref, () => ({
        getModelId() {
            console.log(selectedId)
            return selectedId
        }
    }))
    useEffect(() => {
        getFMs().then(res => {
            if (multimodal == true) {
                res = res.filter(res => res.inputModalities.includes("IMAGE"))
            }
            setModels(res)
            setSelectedId(res[0].modelId)
        })

    }, [])

    const getOptions = () => {
        const options = models ? models.map(model => {
            return { text: model.modelName, id: model.modelId }
        }) : []
        return options
    }

    return (
        <FormField label="Model">

            <SegmentedControl selectedId={selectedId}
            label="Models"
                onChange={({ detail }) => setSelectedId(detail.selectedId)}
                options={getOptions()} />
</FormField>
    )
})

export default FMPicker