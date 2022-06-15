import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterPosts } from '../../actions/userActions'
import { Title } from '../../styles/global-styles'
import { PostContainer } from '../../styles/users-style'
import { UserPost } from './UserPost'

export const UserPosts = ({ posts }) => {

  return (
    <PostContainer>
      {
        posts.map(post => (
            <UserPost post={ post } key={ post.id }/>
          ))
      }
    </PostContainer>
  )
}
