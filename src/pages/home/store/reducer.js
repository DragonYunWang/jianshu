import { fromJS } from 'immutable'
import * as types from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: action.topicList,
    articleList: action.articleList,
    recommendList: action.recommendList,
    writerList: action.writerList
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case types.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articPage: action.nextPage
      })
    case types.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}
