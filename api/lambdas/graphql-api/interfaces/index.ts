export interface EventBody {
  query: string
  variables: Record<string, unknown>
  operationName: string
}

export interface Event {
  body: string
  headers: {
    [key: string]: string
  }
}

/** A standard mutation response.
 *
 * This is returned when the consumer doesn't need anything from the mutation, only a confirmation. */
export interface MutationResult {
  status: number
  message?: string
}

/** A GraphQL resolver function. */
export type Resolver<ReturnType, Variables = Record<string, string>> = (variables: Variables) => Promise<ReturnType>
