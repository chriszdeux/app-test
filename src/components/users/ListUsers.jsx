import React from 'react'
import { useSelector } from 'react-redux'
import { animations } from '../../constant/animations'
import { useGetUsers } from '../../hooks/dataFetch/useGetUsers'
import { Title } from '../../styles/global-styles'
import { UsersPage } from '../../styles/users-style'
import { UserCard } from './UserCard'

export const ListUsers = () => {
  const { users } = useSelector(state => state.storage_reducer)
  // debugger
  const { logged } = useSelector(state => state.login_reducer)
  const { fade_in, fade_out } = animations
  // debugger
  return (
    <UsersPage className={ logged ? fade_in : fade_out }>
     {
       users.length > 0 &&
       users.map(user => (
         <UserCard user={ user } key={ user.id }/>
         ))
      } 
    </UsersPage>
  )
}
     
