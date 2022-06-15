import React from 'react'
import { useOpenComponent } from '../../hooks/useOpenComponent'
import { Paragrahp, SubTitle } from '../../styles/global-styles'
import { Card, CardImage, Image } from '../../styles/users-style'
import { UserModal } from './UserModal'

export const UserCard = ({ user }) => {
  const { id, avatar, first_name, last_name, email } = user
  const { isOpen, handleIsOpen } = useOpenComponent()
  return (
      <>
        <Card onClick={ handleIsOpen }>
          <CardImage>
            <Image src={ avatar } alt={ first_name } />
          </CardImage>
          <SubTitle>{ first_name } { last_name }</SubTitle>
          <Paragrahp>{ email }</Paragrahp>
        </Card>
        {
          isOpen &&
          <UserModal values={{ user, handleIsOpen }}/>
        }
      </>
  )
}