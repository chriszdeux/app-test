import React from 'react'
import { Paragrahp, SubTitle, Text } from '../../styles/global-styles'
import { Post, PostBody } from '../../styles/users-style'
import { Comments } from './Comments'
import { EditDeletePost } from './EditDeletePost'

export const UserPost = ({ post }) => {
  const { body, title } = post
  // debugger

  return (
    <Post>
      {/* <SubTitle>{ name.slice(0,15) }</SubTitle> */}
      <Text>{ title }</Text>
      <PostBody>{ body }</PostBody>
      <EditDeletePost />
      {/* <Comments post={ post }/> */}
    </Post>
  )
}
