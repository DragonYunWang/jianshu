import { fromJS } from 'immutable'
import * as types from './actionTypes'

const defaultState = fromJS({
  title: '',
  content: ''
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
