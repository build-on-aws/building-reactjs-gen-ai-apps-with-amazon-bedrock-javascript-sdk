
import { useState, useEffect } from 'react'

import { formatDates } from './helpers'
import BasicCollection from './BasicCollection'

import { fetchByValue } from './fetchHelper'


export default () => {
    const [itemList, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const columnDefinitions = [
        { id: "id", header: "id", cell: e => e.id, isRowHeader: false },
        { id: "name", header: "Name", cell: e => e.name, sortingField: "name", isRowHeader: true },
        { id: "prompt", header: "Prompt", cell: e => e.prompt, sortingField: "prompt", isRowHeader: true },
        { id: "createdAt", header: "Creation", cell: e => formatDates(e.createdAt), sortingField: "createdAt", isRowHeader: true },
        { id: "updatedAt", header: "Update", cell: e => formatDates(e.updatedAt), sortingField: "updatedAt", isRowHeader: true }
    ]

    const columnDisplay = [
        { id: "name", visible: true },
        { id: "prompt", visible: true },
        { id: "createdAt", visible: false },
        { id: "updatedAt", visible: true }
    ]



    const getList = async () => {
        setIsLoading(true)
        setList(await fetchByValue("listPrompts"))
        setIsLoading(false)
    }

    useEffect(() => {
        getList()
    }, [])

    return (
   
            <BasicCollection
                headerText={"My Prompts"}
                itemList={itemList}
                columnDefinitions={columnDefinitions}
                columnDisplay={columnDisplay}
                isLoading={isLoading}
            />

    )
}