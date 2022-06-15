import React from 'react'
import { useSelector } from 'react-redux'
import { useGetUsers } from '../../hooks/dataFetch/useGetUsers'
import { Title } from '../../styles/global-styles'
import { UsersPage } from '../../styles/users-style'
import { UserCard } from './UserCard'

export const ListUsers = () => {
  const { fullData } = useSelector(state => state.storage_reducer)
  // debugger
  return (
    <UsersPage>
     {
       fullData.map(user => (
         <UserCard user={ user } key={ user.id }/>
         ))
      } 
    </UsersPage>
  )
}
     
