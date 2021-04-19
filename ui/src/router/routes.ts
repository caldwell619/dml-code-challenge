/* eslint-disable no-unused-vars */ // This ESLint config is not cohesive with TS, please excuse the disable
/** The paths that the app has access to. Rather than passing strings around, this enum consolidates all usage of route paths */
export enum Routes {
  Home = '/home',
  Surveys = '/surveys',
  CreateSurvey = '/create-survey',
  RespondToSurvey = '/respond-to-survey',
  ResponseConfirmation = '/response-confirmation',
  Settings = '/settings'
}
/* eslint-enable no-unused-vars */

/** Map of the routes that are used by the plain users of the app.
 * These routes should remove the nav tabs. A primitive protection in place of auth
 */
export const userRoutes: Partial<Record<Routes, boolean>> = {
  [Routes.ResponseConfirmation]: true,
  [Routes.RespondToSurvey]: true
}
