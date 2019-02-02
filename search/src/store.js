export const ACTION_TYPES = {
  FETCH_QUERY_RESULT: 'FETCH_QUERY_RESULT',
};

const initialState = {
  query: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FETCH_QUERY_RESULT: {
      return {
        ...state,
        query: payload.query
      };
    } 
    default: {
      return state;
    }
  }
}

export const fetchQueryResult = ({ query }) => ({
  type: ACTION_TYPES.FETCH_QUERY_RESULT,
  payload: { query }
});