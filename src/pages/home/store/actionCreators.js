import { fromJS } from 'immutable'
import * as types from './actionTypes'
import axios from 'axios'

const chanegHomeData = result => ({
  type: types.CHANGE_HOME_DATA,
  topicList: fromJS(result.topicList),
  articleList: fromJS(result.articleList),
  recommendList: fromJS(result.recommendList),
  writerList: fromJS(result.writerList)
})

const addHomeList = (list, nextPage) => ({
  type: types.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getMoreList = page => {
  return dispatch => {
    axios
      .get('api/homeList.json?page=' + page)
      .then(res => {
        const result = res.data.data
        dispatch(addHomeList(result, page + 1))
      })
      .catch(err => {
        console.log('err ', err)
      })
  }
}
export const getHomeInfo = () => {
  return dispatch => {
    axios
      .get('/api/home.json')
      .then(res => {
        const result = res.data.data
        dispatch(chanegHomeData(result))
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }
}

export const toggleShow = show => ({
  type: types.TOGGLE_SCROLL_TOP,
  show
})
