import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterPosts } from '../../actions/userActions'
import { animations } from '../../constant/animations'
import { Title } from '../../styles/global-styles'
import { PostContainer } from '../../styles/users-style'
import { UserPost } from './UserPost'

export const UserPosts = ({ posts }) => {
  const { fade_top } = animations
  return (
    <PostContainer className={ fade_top } style={{ animationDelay: '2s' }}>
      {
        posts.map(post => (
            <UserPost post={ post } key={ post.id }/>
          ))
      }
    </PostContainer>
  )
}
