import { useState, ChangeEventHandler, Dispatch, SetStateAction } from 'react'

/** Returns the state value, the bind, the setter, and resetter in an array */
export const useInput = (initialValue: string, validationRegex?: RegExp): UseInputHook => {
  const [value, setValue] = useState(initialValue)

  const doesPass = validationRegex ? validationRegex.test(value) : undefined

  return [
    value,
    {
      value,
      onChange: event => {
        setValue(event.target.value)
      }
    },
    {
      setValue,
      resetValue: () => setValue(''),
      doesPass
    }
  ]
}

export interface UseInputBind {
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export type UseInputHook = [
  string,
  UseInputBind,
  { setValue: Dispatch<SetStateAction<string>>; resetValue: () => void; doesPass?: boolean }
]
