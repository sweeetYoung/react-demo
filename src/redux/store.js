import reducer from './reducer'
// import state from './state'
// import actions from './actions'

import { createStore } from "redux";
export const store = createStore(reducer)
