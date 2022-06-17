import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { animations } from '../../constant/animations'
import { Paragrahp, Title } from '../../styles/global-styles'
import { AnimationContainer, BoxDetail, BoxDetailTop, Content, LoginContainer } from '../../styles/login-style'
import { LoginForm } from './LoginForm'

export const LoginScreen = () => {

  const { logged, errorLogin } = useSelector(state => state.login_reducer)

  const { fade_in, fade_top } = animations
  const navigate = useNavigate()
  useEffect(() => {
    logged && navigate('/app-test/users')
  }, [ ])
  return (
    <LoginContainer>
      {
        logged
        ? <Title className={ fade_top }>Loading data..., Welcome n.n</Title>
        : <Content className={ fade_top } style={{ animationDelay: '1s' }}>
          <Title>Sign In</Title>
          <Paragrahp>Please login with your email/password</Paragrahp>
          <LoginForm />
          <Paragrahp>Forgot your password?</Paragrahp>
        </Content>
      }
    </LoginContainer>
  )
}
