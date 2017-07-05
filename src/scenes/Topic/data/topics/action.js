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
const downvoteTopic = (id) => ({ type: DOWNVOTE, id})


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
    dispatch(createTopic(payload))
    dispatch(topicsSuccess())
  }
)

export const update = (id, payload) => (
  (dispatch) => {
    dispatch(topicsRequest())
    dispatch(updateTopic(id, payload))
    dispatch(topicsSuccess())
  }
)

export const archive = (id) => (
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
