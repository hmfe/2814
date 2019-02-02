export const ACTION_TYPES = {
  FETCH_QUERY_RESULT: 'FETCH_QUERY_RESULT',
  FETCH_QUERY_RESULT_SUCCESS: 'FETCH_QUERY_RESULT_SUCCESS',
  FETCH_QUERY_RESULT_FAILURE: 'FETCH_QUERY_RESULT_FAILURE'
}

const initialState = {
  fetchedQuery: '',
  hits: [],
  isFetching: false,
  query: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_QUERY_RESULT: {
      return {
        ...state,
        isFetching: true,
        query: payload.query
      }
    } 
    case ACTION_TYPES.FETCH_QUERY_RESULT_SUCCESS: {
      return {
        ...state,
        fetchedQuery: payload.query,
        hits: payload.hits,
        isFetching: false
      }
    }
    case ACTION_TYPES.FETCH_QUERY_RESULT_FAILURE: {
      return {
        ...state,
        hits: [],
        isFetching: false
      }
    }
    default: {
      return state
    }
  }
}

export const fetchQueryResult = ({ query }) => ({
  type: ACTION_TYPES.FETCH_QUERY_RESULT,
  payload: { query }
})

export const fetchQueryResultSuccess = ({ hits, query }) => ({
  type: ACTION_TYPES.FETCH_QUERY_RESULT_SUCCESS,
  payload: { hits, query }
})

export const fetchQueryResultFailure = payload => ({
  type: ACTION_TYPES.FETCH_QUERY_RESULT_FAILURE,
  payload
})