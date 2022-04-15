import { SET_FILTER_PARAMS } from './actionsType'
import { store } from "./store";
const actions = {
  [SET_FILTER_PARAMS](payload) {
    store.dispatch({
      type: 'SET_FILTER_PARAMS',
      data: payload
    })
  }
}
export default actions
