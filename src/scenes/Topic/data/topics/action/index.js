// This file contains the list of actions and types for handling state in topic reducers

import moment from 'moment'
import Helper from 'services/helper'

//Action Types
export const REQUEST = 'TOPICS_REQUEST'
export const SUCCESS = 'TOPICS_SUCCESS'
export const ERROR = 'TOPICS_ERROR'
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
const createTopic = (payload) => ({ type: CREATE, payload })
const updateTopic = (id, payload) => ({ type: UPDATE, id, payload })
const removeTopic = (id) => ({ type: REMOVE, id })
const upvoteTopic = (id) => ({ type: UPVOTE, id })
const downvoteTopic = (id) => ({ type: DOWNVOTE, id })
const orderTopics = (order) => ({ type: ORDER, order })

//Action List
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
    return new Promise((resolve, reject) => {
      // Check error for the payload (usually from the backend)
      // Setting timeout is for simulation of sending request to server
      setTimeout(() => {
        const error = validatePayload(payload)
        if (Object.keys(error).length === 0) {
          dispatch(updateTopic(id, payload))
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

export const remove = (id) => (
  (dispatch, getState) => {
    const state = getState()
    dispatch(topicsRequest())
    return new Promise((resolve, reject) => {
      // Check error for the payload (usually from the backend)
      // Setting timeout is for simulation of sending request to server
      setTimeout(() => {
        const error = validateId(id, state)
        if (Object.keys(error).length === 0) {
          dispatch(removeTopic(id))
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

// Order topics based on the current path of the route,
// This will allow the topic list to maintain the order of items
// Otherwise, when item is being upvote / downvote, the order will keep changing
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

// Local Functions
// The validation of payload is usually done by the server
// In this case, the validation will be done here
const validatePayload = (payload) => {
  const error = {}

  //Title
  if (!Helper.isNonEmptyString(payload.title)) {
    error.title = "Title can't be blank"
  } else if (payload.title.trim().length > 255) {
    error.title = "Length of title can't exceed 255 characters"
  }

  return error
}

// Check whether id exists in reducer or not
const validateId = (id, state) => {
  const error = {}
  const { topics } = state.Topic.data;

  if (topics.byId.indexOf(id) === -1 || Helper.isNullOrUndefined(topics.byHash[id])) {
    error.id = "Topic not exist"
  }

  return error
}
