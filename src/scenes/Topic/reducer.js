import {
  REQUEST as TOPICS_REQUEST,
  SUCCESS as TOPICS_SUCCESS,
  ERROR as TOPICS_ERROR,
} from './data/topics/action'
import { reducer as dataReducer } from './data/reducer';

const initialState = {
  loading: false,
  error: null,
}

const loadingReducer = (state, action) => {
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

const errorReducer = (state, action) => {
  switch (action.type) {
    case TOPICS_SUCCESS:
      return null
    case TOPICS_ERROR:
      return action.error
    default:
      return state
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      const { loading, error, ...data } = initialState;
      return {
        ...state,
        loading: loadingReducer(loading, action),
        error: errorReducer(error, action),
        data: dataReducer(data, action),
      }
  }
}
