import React from 'react'
import { useGetPosts } from '../../hooks/dataFetch/useFetchPosts'
import { Title } from '../../styles/global-styles'
import { PostContainer } from '../../styles/users-style'
import { UserPost } from './UserPost'

export const UserPosts = ({ id }) => {
  const { posts, loading, error } = useGetPosts(id)
  return (
    <PostContainer>
      {
        loading
          ? <Title>Loading...</Title>
          : error.isError
            ? <Title>Error loading data</Title>
            : 
            posts.map(post => (
                <UserPost post={ post } key={ post.id }/>
              ))
      }
      
    </PostContainer>
  )
}
