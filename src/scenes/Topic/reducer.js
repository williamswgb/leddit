import { combineReducers } from 'redux'

import {
  REQUEST as TOPICS_REQUEST,
  SUCCESS as TOPICS_SUCCESS,
  ERROR as TOPICS_ERROR,
} from './data/topics/action'
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
    case TOPICS_SUCCESS:
      return null
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
