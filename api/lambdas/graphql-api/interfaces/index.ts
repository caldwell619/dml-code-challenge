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

export interface MutationResult {
  status: number
  message?: string
}

export type Resolver<ReturnType, Variables = Record<string, string>> = (variables: Variables) => Promise<ReturnType>
