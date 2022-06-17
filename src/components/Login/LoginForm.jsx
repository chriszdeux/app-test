import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearStorage } from '../../actions/storeDataAction'
import { loginUser } from '../../actions/userActions'
import { login } from '../../data/login'
import { useLogin } from '../../hooks/dataFetch/useLogin'
import { useForm } from '../../hooks/useForm'
import { loginReducer } from '../../reducers/loginReducer'
import { Button, RegularButton, SubTitle, Text, Title} from '../../styles/global-styles'
import { Form, Input, Label } from '../../styles/login-style'

export const LoginForm = () => {

  const dispatch = useDispatch();
  const [defaultLogin, setDefaultLogin] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
   
  })
  const { logged, errorLogin } = useSelector(state => state.login_reducer)
  // debugger
const { inputValues, handleInputChange, setInputValues } = useForm({
  ...defaultLogin,
  email: defaultLogin.email,
  password: defaultLogin.password,
  errorLog: false,
  errorMessage: 'Email / Password incorrect'
})
const navigate = useNavigate()
const { email, password, errorLog, errorMessage } = inputValues
const handleSubmit = (e) => {
  e.preventDefault()
  if(email.length > 0 && password.length > 0) {
    dispatch(loginUser(inputValues))
    setTimeout(() => {
      if(!errorLogin) {
      navigate('/app-test/users')
    }
    }, 3000);
  } else {
    setInputValues({
      ...inputValues,
      errorLog: true
    })
  }

}

const handleResetDefault = (e) => {
  e.preventDefault()
  setInputValues({
    ...defaultLogin,
  })
  
}

const handleClearCache = () => {
  dispatch(clearStorage())
}

useEffect(() => {
  logged && navigate('/app-test/users')
}, [ ])
  return (
    <Form>
        <Input type='email' name='email' value={ email } onChange={ handleInputChange } placeholder='Email'/>
        <Input type='password' name='password' value={ password } onChange={ handleInputChange }  placeholder='Password'/>
        { errorLog && <Label>Email / Password incorrect</Label> }
        <RegularButton onClick={ handleSubmit }>Sign In</RegularButton>

        <RegularButton onClick={ handleResetDefault }>Default User</RegularButton>
        { errorLogin &&  <SubTitle>access denied</SubTitle>}

        <RegularButton onClick={ handleClearCache  }>Clear Cache</RegularButton>
        
      </Form>
  )
}
