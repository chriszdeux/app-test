import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export const Router = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ LoginScreen } />
        <Route path='/app-test/' element={ LoginScreen } />
        <Route path='/app-test/login' element={ LoginScreen } />
        <Route path='/app-test/users' element={ UsersScreen } />
      </Routes>
    </Router>
  )
}
