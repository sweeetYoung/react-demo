import { SET_FILTER_PARAMS } from './actionsType'
import { store } from "./store";
const actions = {
  [SET_FILTER_PARAMS](payload) {
    console.log('action', payload)
    store.dispatch({
      type: 'SET_FILTER_PARAMS',
      payload: payload
    })
  }
}
export default actions
