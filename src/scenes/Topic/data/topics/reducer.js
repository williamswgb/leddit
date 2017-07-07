const initialState = {
  byId: [],
  byHash: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TOPIC':
      return {
        ...state,
        byId: [ ...state.byId, state.byId.length+1],
        byHash: {
          ...state.byHash,
          [state.byId.length+1]: {
            ...action.payload,
            id: state.byId.length+1,
            vote: 0,
          }
        }
      }
    case 'UPDATE_TOPIC':
      return {
        ...state,
        byHash: {
          ...state.byHash,
          [action.id]: {
            ...state.byHash[action.id],
            ...action.payload,
          }
        }
      }
    case 'REMOVE_TOPIC':
      const prunedId = state.byId.filter(id => id !== action.id);
      const { [action.id]: omit, ...prunedHash } = state.byHash;
      return {
        ...state,
        byId: prunedId,
        byHash: prunedHash,
      }
    case 'UPVOTE_TOPIC':
      return {
        ...state,
        byHash: {
          ...state.byHash,
          [action.id]: {
            ...state.byHash[action.id],
            vote: state.byHash[action.id].vote+1,
          }
        }
      }
    case 'DOWNVOTE_TOPIC':
      return {
        ...state,
        byHash: {
          ...state.byHash,
          [action.id]: {
            ...state.byHash[action.id],
            vote: Math.max(state.byHash[action.id].vote-1, 0),
          }
        }
      }
    default:
      return state
  }
}
