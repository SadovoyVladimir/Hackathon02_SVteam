import { createAction, createSlice } from '@reduxjs/toolkit'
import memberService from '../services/member.service'

const membersSlice = createSlice({
  name: 'members',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    membersRequested: (state) => {
      state.isLoading = true
    },
    membersRecieved: (state, action) => {
      state.entities = action.payload
      state.lastFetch = Date.now()
      state.isLoading = false
    },
    membersRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    memberCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = []
      }
      state.entities.push(action.payload)
    }
  }
})
const { reducer: membersReducer, actions } = membersSlice

const {
  membersRequested,
  membersRecieved,
  membersRequestFailed,
  memberCreated
} = actions

const memberCreateRequested = createAction('members/memberCreateRequested')
const createMemberFailed = createAction('members/createMemberFailed')

function isOutdated(date) {
  if (Date.now() - date > 10 * 60 * 1000) {
    return true
  }
  return false
}

export const createUser = (payload) => async (dispatch) => {
  dispatch(memberCreateRequested())
  try {
    const { data } = await memberService.create(payload)
    dispatch(memberCreated(data))
  } catch (error) {
    dispatch(createMemberFailed(error.message))
  }
}

export const loadMembersList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().members

  if (isOutdated(lastFetch)) {
    dispatch(membersRequested())
    try {
      const { content } = await memberService.get()
      dispatch(membersRecieved(content))
    } catch (error) {
      dispatch(membersRequestFailed(error.message))
    }
  }
}

export const getMembers = () => (state) => state.members.entities
export const getMembersLoadingStatus = () => (state) => state.members.isLoading
export const getMemberById = (memberId) => (state) => {
  if (state.members.entities) {
    let member
    for (const mem of state.members.entities) {
      if (mem.id === +memberId) {
        member = mem
        break
      }
    }
    return member
  }
  return []
}

export default membersReducer
