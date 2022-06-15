import React from 'react'
import { Paragrahp, SubTitle } from '../../styles/global-styles'
import { Card, CardImage, Image, ModalContent } from '../../styles/users-style'
import { UserPosts } from './UserPosts'

export const UserMoldaInfo = ({ user }) => {
  const { avatar, first_name, last_name, email, id, posts } = user

  // useEffect(() )
  // debugger
  return (
    <ModalContent>
    <Card>
      <CardImage>
        <Image src={ avatar } alt={ first_name } />
      </CardImage>
      <SubTitle>{ first_name } { last_name }</SubTitle>
      <Paragrahp>{ email }</Paragrahp>
    </Card>
    <UserPosts posts={ posts }/>
    </ModalContent>
  )
}
