import moment from 'moment'

import {
  CREATE,
  UPDATE,
  REMOVE,
  UPVOTE,
  DOWNVOTE,
  ORDER,
} from './action'

const initialState = {
  order: [],
  byId: [],
  byHash: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        byId: [ ...state.byId, state.byId.length+1],
        byHash: {
          ...state.byHash,
          [state.byId.length+1]: {
            ...action.payload,
            id: state.byId.length+1,
            vote: 0,
            updatedAt: moment().format()
          }
        }
      }
    case UPDATE:
      return {
        ...state,
        byHash: {
          ...state.byHash,
          [action.id]: {
            ...state.byHash[action.id],
            ...action.payload,
            updatedAt: moment().format()
          }
        }
      }
    case REMOVE:
      const prunedHash = Object.assign({}, state.byHash)
      delete prunedHash[action.id]
      return {
        ...state,
        order: state.byId.filter(id => id !== action.id),
        byId: state.byId.filter(id => id !== action.id),
        byHash: prunedHash,
      }
    case UPVOTE:
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
    case DOWNVOTE:
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
    case ORDER:
      return {
        ...state,
        order: action.order,
      }
    default:
      return state
  }
}
