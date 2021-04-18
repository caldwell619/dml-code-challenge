import { Survey } from 'shared-types'

/** The base for all Dynamo records pertaining to a survey. This key will be extended,
 * but shared as the base for all survey related records
 */
export const surveyBaseKey = '#SURVEY'

export const surveyAnswerQuestion: Survey['question'] = 'What is the best Star Wars movie?'
export const surveyAnswerOptions: Survey['answerChoices'] = ['A New Hope', 'Empire Strikes Back', 'Return of the Jedi']
