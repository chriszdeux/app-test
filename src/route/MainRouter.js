import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { HeaderBar } from '../components/header';
import { LoginScreen } from '../components/Login';
import { UsersScreen } from '../components/users';


export const MainRouter = () => {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path='/' element={ <LoginScreen /> } />
        <Route path='/app-test/' element={ <LoginScreen /> } />
        <Route path='/app-test/login' element={ <LoginScreen /> } />
        <Route path='/app-test/users' element={ <UsersScreen  /> } />
      </Routes>
    </Router>
  )
}
