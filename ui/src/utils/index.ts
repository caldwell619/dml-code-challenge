import { Routes } from 'router/routes'

/** Sends the app to the error page */
export const handleRouteCreation = (isError: boolean) =>
  `${Routes.ResponseConfirmation}?status=${isError ? 'failure' : 'success'}`
