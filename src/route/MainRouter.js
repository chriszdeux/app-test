import React from 'react'
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { HeaderBar } from '../components/header';
import { LoginScreen } from '../components/Login';
import { UsersScreen } from '../components/users';
import { animations } from '../constant/animations';
import { AnimationContainer, BoxDetail, BoxDetailTop } from '../styles/login-style';



export const MainRouter = () => {
  const { logged } = useSelector(state => state.login_reducer)
  const { fade_in } = animations
  return (
    <Router>
      { logged && <HeaderBar /> }
      
      <Routes>
        <Route path='/' element={ <LoginScreen /> } />
        <Route path='/app-test/' element={ <LoginScreen /> } />
        <Route path='/app-test/login' element={ <LoginScreen /> } />
        <Route path='/app-test/users' element={ <UsersScreen  /> } />
      </Routes>
      <AnimationContainer className={ fade_in }>
       <BoxDetailTop ></BoxDetailTop>
       <BoxDetail ></BoxDetail>
       </AnimationContainer>
    </Router>
  )
}
