import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { actionCreators } from './store'
class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
  render() {
    const { showScroll } = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt=""
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnMount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = state => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    document.documentElement.scrollTop > 100
      ? dispatch(actionCreators.toggleShow(true))
      : dispatch(actionCreators.toggleShow(false))
  }
})

export default connect(
  mapState,
  mapDispatch
)(Home)
