import { DocumentNode } from 'graphql'
import { GraphQLClient } from 'graphql-request'

import { GRAPHQL_ENDPOINT as uri } from 'constants/index'

const client = new GraphQLClient(uri, { headers: { Authorization: '' } })

export const runQuery = async <ReturnTypeOfQuery>(
  query: DocumentNode,
  variables: Variables = {},
  onUnauthorized: (error: Error) => void = () => {}
) => {
  // @ts-ignore Overriding the private declaration of options - don't want to make a new class every request
  client.options.headers = {
    Authorization: ''
  }
  try {
    return await client.request<ReturnTypeOfQuery>(query, variables)
  } catch (error) {
    if (error.response.status === 403) {
      onUnauthorized(error)
    } else {
      throw error
    }
  }
}

interface Variables {
  [key: string]: string | number | boolean | string[] | number[] | boolean[]
}
