import moment from 'moment'
import { reducer } from './index'
import {
  CREATE,
  UPDATE,
  REMOVE,
  UPVOTE,
  DOWNVOTE,
  ORDER,
} from '../action'

const initialState = {
  order: [],
  byId: [],
  byHash: {},
}

describe('Topics Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('should handle CREATE', () => {
    expect(
      reducer(initialState, {
        type: CREATE,
        payload: {
          title: 'Title test',
          text: 'Text test',
        },
      })
    ).toEqual({
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
    })
  })

  it('should handle UPDATE', () => {
    const state = {
      order: [1],
      byId: [1],
      byHash: {
        1: {
          id: 1,
          title: 'Title test',
          text: 'Text test',
          vote: 23,
          updatedAt: "2017-07-09T20:13:06+08:00",
        }
      }
    }

    expect(
      reducer(state, {
        type: UPDATE,
        id: 1,
        payload: {
          title: 'Updated title test',
          text: 'Updated text test',
        },
      })
    ).toEqual({
      order: [1],
      byId: [1],
      byHash: {
        1: {
          id: 1,
          title: 'Updated title test',
          text: 'Updated text test',
          vote: 23,
          updatedAt: moment().format(),
        }
      }
    })
  })

  it('should handle REMOVE', () => {
    const state = {
      order: [1],
      byId: [1],
      byHash: {
        1: {
          id: 1,
          title: 'Title test',
          text: 'Text test',
          vote: 23,
          updatedAt: "2017-07-09T20:13:06+08:00",
        }
      }
    }

    expect(
      reducer(state, {
        type: REMOVE,
        id: 1
      })
    ).toEqual({
      order: [],
      byId: [],
      byHash: {},
    })
  })

  it('should handle UPVOTE', () => {
    const state = {
      order: [1],
      byId: [1],
      byHash: {
        1: {
          id: 1,
          title: 'Title test',
          text: 'Text test',
          vote: 23,
          updatedAt: "2017-07-09T20:13:06+08:00",
        }
      }
    }

    expect(
      reducer(state, {
        type: UPVOTE,
        id: 1
      })
    ).toEqual({
      order: [1],
      byId: [1],
      byHash: {
        1: {
          id: 1,
          title: 'Title test',
          text: 'Text test',
          vote: 24,
          updatedAt: "2017-07-09T20:13:06+08:00",
        }
      },
    })
  })

  it('should handle DOWNVOTE', () => {
    const state = {
      order: [1],
      byId: [1],
      byHash: {
        1: {
          id: 1,
          title: 'Title test',
          text: 'Text test',
          vote: 23,
          updatedAt: "2017-07-09T20:13:06+08:00",
        }
      }
    }

    expect(
      reducer(state, {
        type: DOWNVOTE,
        id: 1
      })
    ).toEqual({
      order: [1],
      byId: [1],
      byHash: {
        1: {
          id: 1,
          title: 'Title test',
          text: 'Text test',
          vote: 22,
          updatedAt: "2017-07-09T20:13:06+08:00",
        }
      },
    })
  })

  it('should handle ORDER', () => {
    expect(
      reducer(initialState, {
        type: ORDER,
        order: [5,1,3,4,2]
      })
    ).toEqual({
      order: [5,1,3,4,2],
      byId: [],
      byHash: {},
    })
  })
});
