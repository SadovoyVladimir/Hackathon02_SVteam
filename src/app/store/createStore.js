import { combineReducers, configureStore } from '@reduxjs/toolkit'
import membersReducer from './memberSlice'

const rootReducer = combineReducers({
  members: membersReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
