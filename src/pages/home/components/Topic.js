import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'
class Topic extends PureComponent {
  render() {
    const { list } = this.props
    // const newList = list.toJS()
    const items = list.map((item, index) => {
      return (
        <TopicItem key={item.get('id')}>
          <img className="topic-pic" src={item.get('imgUrl')} alt="" />
          {item.get('title')}
        </TopicItem>
      )
    })
    return <TopicWrapper>{items}</TopicWrapper>
  }
}
const mapState = state => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}
export default connect(
  mapState,
  null
)(Topic)
