import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { animations } from '../../constant/animations'
import { ListUsers } from './ListUsers'

export const UsersScreen = () => {
  const { logged } = useSelector(state => state.login_reducer)
  const navigate = useNavigate()

  useEffect(() => {
    logged === false && navigate('/app-test/')
  }, [])
  const { fade_in, fade_out } = animations
  return (
   <ListUsers /> 
  )
}
