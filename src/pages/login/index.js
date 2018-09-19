import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { LoginWrapper, LoginBox, Input, Button } from './style'
class Login extends PureComponent {
  render() {
    const { loginStatus, login } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              innerRef={input => {
                this.account = input
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              innerRef={input => {
                this.password = input
              }}
            />
            <Button onClick={() => login(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}
const mapState = state => ({
  loginStatus: state.getIn(['login', 'login'])
})
const mapDispatch = dispatch => ({
  login(accountEle, passwordEle) {
    dispatch(actionCreators.login(accountEle.value, passwordEle.value))
  }
})
export default connect(
  mapState,
  mapDispatch
)(Login)
