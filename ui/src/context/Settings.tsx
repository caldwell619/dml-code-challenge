import { FC, createContext, useState, useMemo, useCallback } from 'react'

const isUsingGraphQLInitial = JSON.parse(localStorage.getItem('isUsingGraphQLArgument') || 'null')
export const Settings = createContext<ISettingsContext>({
  isUsingGraphQL: isUsingGraphQLInitial?.isUsingGraphQLArgument as boolean,
  setIsUsingGraphQL: () => {}
})

export const SettingsProvider: FC = ({ children }) => {
  const [isUsingGraphQL, setIsUsingGraphQL] = useState(isUsingGraphQLInitial)

  const handleChange = useCallback(
    (isUsingGraphQLArgument: boolean) => {
      localStorage.setItem('isUsingGraphQL', JSON.stringify({ isUsingGraphQLArgument }))
      setIsUsingGraphQL(isUsingGraphQLArgument)
    },
    [setIsUsingGraphQL]
  )

  const value = useMemo(
    () => ({
      isUsingGraphQL,
      setIsUsingGraphQL: handleChange
    }),
    [isUsingGraphQL, handleChange]
  )
  return <Settings.Provider value={value}>{children}</Settings.Provider>
}

interface ISettingsContext {
  isUsingGraphQL: boolean
  setIsUsingGraphQL: (isUsingGraphQL: boolean) => void
}
