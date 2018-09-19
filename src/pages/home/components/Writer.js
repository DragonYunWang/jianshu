import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterInfoItem } from '../style'

class Writer extends PureComponent {
  render() {
    const { list } = this.props
    const items = list.map(item => {
      return (
        <WriterInfoItem key={item.get('id')}>
          <img className="avatar" alt="" src={item.get('avatar_source')} />
          <a className="follow">+ 关注</a>
          <a className="name">{item.get('nickname')}</a>
          <p>
            {' '}
            写了
            {(item.get('total_wordage') / 1000).toFixed(1)}
            k字 ·{(item.get('total_likes_count') / 1000).toFixed(1)}
            k喜欢
          </p>
        </WriterInfoItem>
      )
    })
    return (
      <WriterWrapper>
       {items}
      </WriterWrapper>
    )
  }
}

const mapState = state => {
  return {
    list: state.getIn(['home', 'writerList'])
  }
}
export default connect(
  mapState,
  null
)(Writer)
