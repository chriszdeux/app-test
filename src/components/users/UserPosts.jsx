import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterPosts } from '../../actions/userActions'
import { animations } from '../../constant/animations'
import { Title } from '../../styles/global-styles'
import { PostContainer } from '../../styles/users-style'
import { UserPost } from './UserPost'

export const UserPosts = () => {
  const { filterPostById, posts } = useSelector(state => state.storage_reducer)
  const { fade_top } = animations
  const dispatch = useDispatch()
  // debugger
  return (
    <PostContainer className={ fade_top } style={{ animationDelay: '2s' }}>
      {
        filterPostById.length === 0
        ? <Title>No post</Title>
        : filterPostById.map(post => (
            <UserPost post={ post } key={ post.id }/>
          ))
      }
    </PostContainer>
  )
}
