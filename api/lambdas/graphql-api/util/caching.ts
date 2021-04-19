import NodeCache from 'node-cache'

export const Cache = new NodeCache({
  stdTTL: 120, // 2m
  useClones: false
})

const setToInMemoryCache = <Payload>(key: string, payload?: Payload): void => {
  Cache.set(key, JSON.stringify(payload))
}

const getFromInMemoryCache = <ReturnType>(key: string): ReturnType | undefined => {
  const stringifiedItems = Cache.get<string>(key)
  return stringifiedItems ? JSON.parse(stringifiedItems) : undefined
}

export const handleCache = <Payload>(
  key: string,
  action: 'write' | 'read',
  payload?: Payload
): Payload | void | undefined => {
  return action === 'write' ? setToInMemoryCache<Payload>(key, payload) : getFromInMemoryCache<Payload>(key)
}

export const invalidateCache = (key: string): void => {
  Cache.del(key)
}

/** Handles the caching in and out of a function. Works much like useMemo on the UI, without the dependency array */
export const useCaching = async <CallbackReturn>(
  callback: () => Promise<CallbackReturn>,
  key: string
): Promise<CallbackReturn> => {
  const potentiallyCachedResult = handleCache<CallbackReturn>(key, 'read')
  if (potentiallyCachedResult) return new Promise(resolve => resolve(potentiallyCachedResult))
  const freshResult = await callback()
  handleCache(key, 'write', freshResult)
  return freshResult
}

export const createCacheKey = <VariableType>(keyName: string, variables: VariableType): string => {
  const variablesKeyNames = Object.values(variables).reduce((accumulator, current) => {
    return `${accumulator}_${current}`
  }, '')
  return `${keyName}_${variablesKeyNames}`
}
