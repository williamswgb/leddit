import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moment from 'moment'

import * as actions from './index'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const initialState = {
  Topic: {
    data: {
      topics:{
        byId: [],
        order: [],
        byHash: [],
      }
    }
  }
}

describe('Topic actions', () => {
  it('should create success actions when adding a valid topic', () => {
    const payload = { title: 'Title test', text: 'Text test'}
    const expectedActions = [
      { type: actions.REQUEST },
      { type: actions.CREATE, payload },
      { type: actions.SUCCESS },
    ]
    const store = mockStore(initialState)
    return store.dispatch(actions.create(payload)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create error actions when adding an invalid topic with blank title', () => {
    const payload = { title: '', text: ''}
    const expectedActions = [
      { type: actions.REQUEST },
      { type: actions.ERROR, error: {"title": "Title can't be blank"} },
    ]
    const store = mockStore(initialState)
    return store.dispatch(actions.create(payload)).catch(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create error actions when adding an invalid topic with title that exceed 256 characters', () => {
    const payload = { title: Array(256).fill('a').join(''), text: ''}
    const expectedActions = [
      { type: actions.REQUEST },
      { type: actions.ERROR, error: {"title": "Length of title can't exceed 255 characters"} },
    ]
    const store = mockStore(initialState)
    return store.dispatch(actions.create(payload)).catch(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create success actions when updating with a valid topic', () => {
    const id = 1
    const payload = { title: 'Updated title test', text: 'Updated text test'}
    const expectedActions = [
      { type: actions.REQUEST },
      { type: actions.UPDATE, payload, id },
      { type: actions.SUCCESS },
    ]
    const store = mockStore(initialState)
    return store.dispatch(actions.update(id, payload)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create error actions when updating with an invalid topic with title that exceed 256 characters', () => {
    const id = 1
    const payload = { title: '', text: ''}
    const expectedActions = [
      { type: actions.REQUEST },
      { type: actions.ERROR, error: {"title": "Title can't be blank"} },
    ]
    const store = mockStore(initialState)
    return store.dispatch(actions.update(id, payload)).catch(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create error actions when updating with an invalid topic with title that exceed 256 characters', () => {
    const id = 1
    const payload = { title: Array(256).fill('a').join(''), text: ''}
    const expectedActions = [
      { type: actions.REQUEST },
      { type: actions.ERROR, error: {"title": "Length of title can't exceed 255 characters"} },
    ]
    const store = mockStore(initialState)
    return store.dispatch(actions.update(id, payload)).catch(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create error actions when removing a non-existing topic', () => {
    const id = 1
    const expectedActions = [
      { type: actions.REQUEST },
      { type: actions.REMOVE, id },
      { type: actions.SUCCESS },
    ]
    const state = Object.assign({}, initialState)
    state.Topic.data.topics = {
      order: [],
      byId: [1],
      byHash: {
        1: {
          id: 1,
          title: 'Title test',
          text: 'Text test',
          vote: 0,
          updatedAt: moment().format(),
        }
      }
    }
    const store = mockStore(state)
    return store.dispatch(actions.remove(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create error actions when removing a non-existing topic', () => {
    const id = 1
    const expectedActions = [
      { type: actions.REQUEST },
      { type: actions.ERROR, error: {"id": "Topic not exist"} }
    ]
    const store = mockStore(initialState)
    return store.dispatch(actions.remove(id)).catch(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create upvote topic action', () => {
    const id = 1
    const expectedActions = [
      { type: actions.UPVOTE, id },
    ]
    const store = mockStore(initialState)

    store.dispatch(actions.upvote(id))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should create downvote topic action', () => {
    const id = 1
    const expectedActions = [
      { type: actions.DOWNVOTE, id },
    ]
    const store = mockStore(initialState)

    store.dispatch(actions.downvote(id))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should create order topic action', () => {
    const path = 'new'
    const expectedActions = [
      { type: actions.ORDER, order: [1] },
    ]
    const store = mockStore(initialState)

    store.dispatch(actions.order(path))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
