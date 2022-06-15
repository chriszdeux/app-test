import React from 'react'
import { Button} from '../../styles/global-styles'
import { Form, Input } from '../../styles/login-style'

export const LoginForm = () => {
  return (
    <Form>
      <Input type='email' name='email' placeholder='Email'/>
      <Input type='password' name='password' placeholder='Password'/>
      <Button>Sign In</Button>
    </Form>
  )
}
