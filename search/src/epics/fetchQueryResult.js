import * as most from 'most'
import { ACTION_TYPES, fetchQueryResultSuccess, fetchQueryResultFailure } from '../store'
import createSearchApi from '../api/searchApi'

export default action$ =>
  action$.filter(action => action.type === ACTION_TYPES.FETCH_QUERY_RESULT)
    .debounce(200)  // Initiates the search query when the user stops typing for 200 ms
    .flatMap(({ payload: { query } }) => 
      most
        .fromPromise(
          createSearchApi({ 
            query
          })
        )
        .map(response => {
          return fetchQueryResultSuccess({
            hits: response,
            query
          })
        })
        .recoverWith(error => {
          return most.of(fetchQueryResultFailure(error))
        })
    )
