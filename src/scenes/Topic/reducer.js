// This reducer combine the data reducer with the other reducers that is related to Topic
// But not necessary the real data.
// Here is the place where we can add small important data that is related for Topic
// E.g. loading, error, filter, etc.

import { combineReducers } from 'redux'

import {
  REQUEST as TOPICS_REQUEST,
  SUCCESS as TOPICS_SUCCESS,
  ERROR as TOPICS_ERROR,
} from './data/topics/action'
import { RESET_ERROR } from './action'
import { reducer as dataReducer } from './data/reducer'

const loading = false

const loadingReducer = (state = loading, action) => {
  switch (action.type) {
    case TOPICS_REQUEST:
      return true;
    case TOPICS_SUCCESS:
    case TOPICS_ERROR:
      return false
    default:
      return state
  }
}

const error = {}

const errorReducer = (state = error, action) => {
  switch (action.type) {
    case RESET_ERROR:
    case TOPICS_REQUEST:
    case TOPICS_SUCCESS:
      return {}
    case TOPICS_ERROR:
      return action.error
    default:
      return state
  }
}

export const reducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  data: dataReducer,
})
