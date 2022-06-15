import React from 'react'
import { useGetUsers } from '../../hooks/dataFetch/useGetUsers'
import { Title } from '../../styles/global-styles'
import { UsersPage } from '../../styles/users-style'
import { UserCard } from './UserCard'

export const ListUsers = () => {
  const { users, loading, error } = useGetUsers(1)
  // debugger
  return (
    <UsersPage>
      {
        loading
          ? <Title>Loading...</Title>
          : error.isError
            ? <Title>Error loading data</Title>
            : 
              users.map(user => (
                <UserCard user={ user } key={ user.id }/>
              ))
      }
    </UsersPage>
  )
}
