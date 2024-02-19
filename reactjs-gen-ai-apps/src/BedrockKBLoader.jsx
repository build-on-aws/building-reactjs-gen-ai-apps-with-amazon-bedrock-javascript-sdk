import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Grid, Select } from "@cloudscape-design/components";
import { getBedrockKnowledgeBases } from "./llmLib";
import { formatDates } from "./helpers"

export default forwardRef(({}, ref) => {
    const [knowledgBases, setKnowledgBases] = useState([])
    const [selectedOption, setSelectedOption] = useState({ });

    useImperativeHandle(ref, () => ({
        getSelectedOption(){
            return selectedOption
        }
    }))


    useEffect(() => {
        getBedrockKnowledgeBases().then(kbs => {
            const kbOptions = kbs.map(kb => ({ label: kb.name, value: kb.knowledgeBaseId, iconName: "settings", description: kb.description, tags: ["Estado: "+ kb.status, "Actualizado: " + formatDates(kb.updatedAt) ]})) 
            setKnowledgBases(kbOptions)
            setSelectedOption(kbOptions[0])
        })

    }, [])



    return (

        <Grid

            gridDefinition={[{ colspan: 12, }]}>

            <Select selectedOption={selectedOption}
                onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
                options={[...knowledgBases]} 
                triggerVariant="option" />

        </Grid>


    )
})