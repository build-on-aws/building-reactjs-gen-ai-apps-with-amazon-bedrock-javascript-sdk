import { generateClient } from "aws-amplify/api"
import * as query from "./graphql/queries"
import { fetchAuthSession } from 'aws-amplify/auth'

export const getUserId = async () => {
    const session = await fetchAuthSession()
    console.log("session", session  )
    let userId = session.identityId
    console.log("userId", userId)
    return userId;  
}


export const getClient = (queryName) => {
    let client = undefined
    let graphqlQuery = ""
    if (queryName in query) {
        client = generateClient()
        graphqlQuery = query[queryName]
    }
    return { client, graphqlQuery }
}

export const fetchById = async (queryName, id) => {
    const { client, graphqlQuery } = getClient(queryName)
    if (client == undefined) {
        console.log(`${queryName} not found`)
        return undefined
    }
    console.info("Query:", queryName, "Id:", id)
    const variables = { id: id }
    const record = await client.graphql(
        { query: graphqlQuery.replaceAll("__typename", ""), variables: variables }
    )
    return record?.data[queryName]
}

const autocompleteLength = 100

export const fetchByValue = async (queryName, value= "") => {
    const { client, graphqlQuery } = getClient(queryName)
    if (client == undefined) {
        console.log(`${queryName} not found`)
        return undefined
    }
    const newOptions = []
    let newNext = ""
    while (newOptions.length < autocompleteLength && newNext != null) {
        const variables = {
            limit: autocompleteLength * 5,
/*             filter: {
                or: [{ title: { contains: value } }, { id: { contains: value } }],
            }, */
        }
        if (newNext) {
            variables["nextToken"] = newNext
        }
        const result = await client.graphql({ query: graphqlQuery, variables })
        let items  =  result?.data[queryName]?.items
        let nextToken = result?.data[queryName]?.nextToken

        newOptions.push(...items)
        newNext = nextToken
        //console.log("nextToken", nextToken)
    }
    //console.log(newOptions)
    return newOptions//.slice(0, autocompleteLength)
}
