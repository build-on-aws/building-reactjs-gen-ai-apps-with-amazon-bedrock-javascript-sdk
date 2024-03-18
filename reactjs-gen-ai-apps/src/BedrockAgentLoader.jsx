import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Grid, Select } from "@cloudscape-design/components";
import { getBedrockAgents } from "./llmLib";
import { formatDates } from "./helpers"

export default forwardRef(({ }, ref) => {
    const [agents, setAgents] = useState([])
    const [selectedOption, setSelectedOption] = useState({});

    useImperativeHandle(ref, () => ({
        getSelectedOption() {
            return selectedOption
        }
    }))

    const expandAgents = (agents) => {
        const agentsFull = []
        agents.forEach(ag => {
            ag.aliases.forEach(alias => { 
                agentsFull.push({ ...ag, alias: alias })
            })
        })
        return agentsFull       
    }

    useEffect(() => {
        getBedrockAgents().then((agents) => {
            const ags = expandAgents(agents)
            const agOptions = ags.map(ag => {
                console.log(ag)
                return ({
                    label: `${ag.agentName} (ID: ${ag.agentId}) ${ag.agentStatus} Actualizado: ${formatDates(ag.updatedAt)}`,
                    value: ag,
                    iconName: "gen-ai",
                    description: ag.status,
                    tags: [ `Alias: ${ag.alias.agentAliasId} / ${ag.alias.agentAliasStatus}`, "Actualizado: " + formatDates(ag.alias.updatedAt)]
                })
            })
            setAgents(agOptions)
            setSelectedOption(agOptions[0])
        })

    }, [])



    return (

        <Grid

            gridDefinition={[{ colspan: 12, }]}>

            <Select selectedOption={selectedOption}
                onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
                options={[...agents]}
                triggerVariant="option" />

        </Grid>


    )
})