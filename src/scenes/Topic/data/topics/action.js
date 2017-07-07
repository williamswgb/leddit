import moment from 'moment'

//Action Types
export const REQUEST = 'TOPICS_REQUEST'
export const SUCCESS = 'TOPICS_SUCCESS'
export const ERROR = 'TOPICS_ERROR'
export const SHOW_LIST = 'SHOW_TOPIC_LIST'
export const SHOW = 'SHOW_TOPIC'
export const CREATE = 'CREATE_TOPIC'
export const UPDATE = 'UPDATE_TOPIC'
export const REMOVE = 'REMOVE_TOPIC'
export const UPVOTE = 'UPVOTE_TOPIC'
export const DOWNVOTE = 'DOWNVOTE_TOPIC'
export const ORDER = 'ORDER_TOPICS'

//Action Triggers
const topicsRequest = () => ({ type: REQUEST })
const topicsSuccess = () => ({ type: SUCCESS })
const topicsError = (error) => ({ type: ERROR, error })
const showTopicList = () => ({ type: SHOW_LIST })
const showTopic = (id) => ({ type: SHOW, id })
const createTopic = (payload) => ({ type: CREATE, payload })
const updateTopic = (id, payload) => ({ type: UPDATE, id, payload })
const removeTopic = (id) => ({ type: REMOVE, id })
const upvoteTopic = (id) => ({ type: UPVOTE, id })
const downvoteTopic = (id) => ({ type: DOWNVOTE, id })
const orderTopics = (order) => ({ type: ORDER, order })


//Action List
export const fetchList = () => (
  (dispatch) => {
    dispatch(topicsRequest())
    dispatch(showTopicList())
    dispatch(topicsSuccess())
  }
)

export const fetch = (id) => (
  (dispatch) => {
    dispatch(topicsRequest())
    dispatch(showTopic(id))
    dispatch(topicsError('error'))
  }
)

export const create = (payload) => (
  (dispatch) => {
    dispatch(topicsRequest())
    return new Promise((resolve, reject) => {
      // Check error for the payload (usually from the backend)
      // Setting timeout is for simulation of sending request to server
      setTimeout(() => {
        const error = validatePayload(payload)
        if (Object.keys(error).length === 0) {
          dispatch(createTopic(payload))
          dispatch(topicsSuccess())
          resolve()
        } else {
          dispatch(topicsError(error))
          reject()
        }
      }, 2000)
    })
  }
)

export const update = (id, payload) => (
  (dispatch) => {
    dispatch(topicsRequest())
    dispatch(updateTopic(id, payload))
    dispatch(topicsSuccess())
  }
)

export const remove = (id) => (
  (dispatch) => {
    dispatch(topicsRequest())
    dispatch(removeTopic(id))
    dispatch(topicsError('error'))
  }
)

export const upvote = (id) => (
  (dispatch) => {
    dispatch(upvoteTopic(id))
  }
)

export const downvote = (id) => (
  (dispatch) => {
    dispatch(downvoteTopic(id))
  }
)

export const order = (path) => (
  (dispatch, getState) => {
    const state = getState()
    const topicObjs = state.Topic.data.topics.byHash
    const topicIds = [...state.Topic.data.topics.byId]
    switch(path) {
      case 'hot':
      case 'topic':
        topicIds.sort((a,b) => topicObjs[a].vote < topicObjs[b].vote)
        break
      case 'new':
        topicIds.sort((a,b) => moment(topicObjs[a].updatedAt)
          .isBefore(moment(topicObjs[b].updatedAt)))
        break
      default:
        break
    }
    dispatch(orderTopics(topicIds))
  }
)

// The validation of payload is usually done by the server
// In this case, the validation will be done here
const validatePayload = (payload) => {
  const error = {}

  //Title
  if (!payload.title || payload.title.trim() === 0) {
    error.title = "Title can't be blank"
  } else if (payload.title.trim().length > 255) {
    error.title = "Length of title can't exceed 255 characters"
  }

  return error
}
