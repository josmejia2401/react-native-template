export const CONTENT_LOADING = 'CONTENT_LOADING';

export function contentLoading(payload) {
  return {
    type: CONTENT_LOADING,
    payload: payload
  };
}

const defualtState = {
  contentLoading: false
};

export default function reducer(state = defualtState, action) {
  switch (action.type) {
    case CONTENT_LOADING:
      return {
        ...state,
        contentLoading: action.payload,
      }
    default:
      return state;
  }
}
