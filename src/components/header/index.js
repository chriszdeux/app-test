import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../actions/userActions'
import { animations } from '../../constant/animations'
import { RegularButton, SubTitle } from '../../styles/global-styles'
import { Header } from '../../styles/header-style'
export const HeaderBar = () => {
  const userData = useSelector(state => state.login_reducer)
  const { logged } = userData
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogout = () => {
    dispatch(logoutUser(userData))
    setTimeout(() => {
      navigate('/app-test/')
    }, 3000);
  }

  const { fade_in, fade_out } = animations
  return (
    <Header className={ logged ? fade_in : fade_out }>
      <SubTitle>App-test</SubTitle>
      {
        logged
        ? <RegularButton onClick={ handleLogout } style={{ width: '10rem' }}>Log out</RegularButton>
        : <SubTitle>Closing session...</SubTitle>
      }
    </Header>

  )
}
