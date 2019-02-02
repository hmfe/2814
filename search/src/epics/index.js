import { combineEpics } from 'redux-most'
import fetchQueryResult from './fetchQueryResult'

export default combineEpics([
  fetchQueryResult
])