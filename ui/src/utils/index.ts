import { Routes } from 'router/routes'

/** Sends the app to the error page */
export const handleErrorRouteCreation = (isError: boolean) =>
  `${Routes.ResponseConfirmation}?status=${isError ? 'failure' : 'success'}`
