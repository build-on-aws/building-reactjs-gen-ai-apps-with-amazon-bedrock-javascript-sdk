import Table from "@cloudscape-design/components/table"
import Pagination from "@cloudscape-design/components/pagination"
import TextFilter from "@cloudscape-design/components/text-filter"
import Box from "@cloudscape-design/components/box"
import SpaceBetween from "@cloudscape-design/components/space-between"
import { useState } from "react"

export default ({ columnDefinitions, columnDisplay, itemList, rowClick }) => {
    const [filteringText, setFilteringText] = useState("")

    const filteredItemList = () => itemList.filter((item) =>
        item.name?.toLowerCase().includes(filteringText.toLowerCase())
        || item.title?.toLowerCase().includes(filteringText.toLowerCase())
        || item.customer?.toLowerCase().includes(filteringText.toLowerCase())
        || item.url?.toLowerCase().includes(filteringText.toLowerCase())
        || item.description?.toLowerCase().includes(filteringText.toLowerCase(),
        )
    )


    return <Table
        columnDefinitions={columnDefinitions}
        items={filteredItemList()}
        columnDisplay={columnDisplay}
        wrapLines={true}
        onRowClick={rowClick}
        empty={<Box><SpaceBetween size="m"><b>No hay</b></SpaceBetween></Box>}
        filter={
            <TextFilter
                filteringText={filteringText}
                filteringPlaceholder="Buscar"
                onChange={({ detail }) =>
                    setFilteringText(detail.filteringText)}
            />
        }
        pagination={
            <Pagination currentPageIndex={1} pagesCount={1} />
        }
    />
}