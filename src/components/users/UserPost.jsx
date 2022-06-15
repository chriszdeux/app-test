import React from 'react'
import { Paragrahp, SubTitle, Text } from '../../styles/global-styles'
import { Post, PostBody } from '../../styles/users-style'
import { EditDeletePost } from './EditDeletePost'

export const UserPost = ({ post }) => {
  const { body, email, name, id, postId } = post
  return (
    <Post>
      <SubTitle>{ name.slice(0,15) }</SubTitle>
      <Text>{ email }</Text>
      <PostBody>{ body }</PostBody>
      <EditDeletePost />
    </Post>
  )
}
