export const ACTION_TYPES = {
  FETCH_QUERY_RESULT: 'FETCH_QUERY_RESULT',
  FETCH_QUERY_RESULT_SUCCESS: 'FETCH_QUERY_RESULT_SUCCESS',
  FETCH_QUERY_RESULT_FAILURE: 'FETCH_QUERY_RESULT_FAILURE',
  ADD_TO_HISTORY: 'ADD_TO_HISTORY',
  CLEAR_HISTORY: 'CLEAR_HISTORY',
  REMOVE_FROM_HISTORY: 'REMOVE_FROM_HISTORY'
}

const initialState = {
  fetchedQuery: '',
  history: [],
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
    case ACTION_TYPES.ADD_TO_HISTORY: {
      return {
        ...state,
        history: [...state.history, { ...payload }]
      }
    }
    case ACTION_TYPES.REMOVE_FROM_HISTORY: {
      return {
        ...state,
        history: state.history.filter(item => item.name !== payload.name)
      }
    }
    case ACTION_TYPES.CLEAR_HISTORY: {
      return {
        ...state,
        history: []
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

export const addToHistory = ({ name }) => ({
  type: ACTION_TYPES.ADD_TO_HISTORY,
  payload: {
    name,
    date: new Intl.DateTimeFormat('sv-SE', {
      year: 'numeric', 
      month: 'numeric', 
      day: 'numeric',
      hour: 'numeric', 
      minute: 'numeric',
    }).format(Date.now())
  }
})

export const removeFromHistory = ({ name }) => ({
  type: ACTION_TYPES.REMOVE_FROM_HISTORY,
  payload: { name }
})

export const clearHistory = () => ({
  type: ACTION_TYPES.CLEAR_HISTORY
})