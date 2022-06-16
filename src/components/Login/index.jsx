import React from 'react'
import { animations } from '../../constant/animations'
import { Paragrahp, Title } from '../../styles/global-styles'
import { AnimationContainer, BoxDetail, BoxDetailTop, Content, LoginContainer } from '../../styles/login-style'
import { LoginForm } from './LoginForm'

export const LoginScreen = () => {
  const { fade_in, fade_top } = animations
  return (
    <LoginContainer>
      
      <Content className={ fade_top } style={{ animationDelay: '1s' }}>
        <Title>Sign In</Title>
        <Paragrahp>Please login with your email/password</Paragrahp>
        <LoginForm />
        <Paragrahp>Forgot your password?</Paragrahp>
      </Content>
    </LoginContainer>
  )
}
