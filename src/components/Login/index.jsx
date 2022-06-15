import React from 'react'
import { Paragrahp, Title } from '../../styles/global-styles'
import { Content, LoginContainer } from '../../styles/login-style'
import { LoginForm } from './LoginForm'

export const LoginScreen = () => {
  return (
    <LoginContainer>
      <Content>
        <Title>Sign In</Title>
        <Paragrahp>Please login with your email/password</Paragrahp>
        <LoginForm />
        <Paragrahp>Forgot your password?</Paragrahp>
      </Content>
    </LoginContainer>
  )
}
