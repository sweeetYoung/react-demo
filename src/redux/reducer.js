import initialState from './state'
import { combineReducers } from 'redux'

function setFilterParams(state = initialState, action) {
  if (action.type === 'SET_FILTER_PARAMS') {
    console.log('执行reducer', action)
    state.filterParams = action.payload
  }
  return state
}

const reducer = combineReducers({setFilterParams});

export default reducer
