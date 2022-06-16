import React from 'react'
import { useSelector } from 'react-redux'
import { animations } from '../../constant/animations'
import { useGetUsers } from '../../hooks/dataFetch/useGetUsers'
import { Title } from '../../styles/global-styles'
import { UsersPage } from '../../styles/users-style'
import { UserCard } from './UserCard'

export const ListUsers = () => {
  const { fullData } = useSelector(state => state.storage_reducer)
  // debugger
  const { fade_in } = animations
  // debugger
  return (
    <UsersPage className={fade_in}>
     {
       fullData !== undefined && fullData.length > 0 &&
       fullData.map(user => (
         <UserCard user={ user } key={ user.id }/>
         ))
      } 
    </UsersPage>
  )
}
     
