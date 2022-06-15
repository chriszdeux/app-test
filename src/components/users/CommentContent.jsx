import React from 'react'
import { Paragrahp, SmallText, SubTitle, Text } from '../../styles/global-styles'
import { Comment } from '../../styles/users-style'

export const CommentContent = ({ comment }) => {
  const { name, body, email, postId } = comment
  return (
    <Comment>
      <SubTitle>{ name }</SubTitle>
      <Text>{ email }</Text>
      <SmallText>{ body }</SmallText>
    </Comment>
  )
}
