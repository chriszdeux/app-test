import React from 'react'
import { animations } from '../../constant/animations'
import { Modal, ModalLayout } from '../../styles/users-style'
import { UserCard } from './UserCard'
import { UserMoldaInfo } from './UserMoldaInfo'

export const UserModal = ({ values }) => {
  // debuggerer
  const { handleIsOpen, user } = values
  const { fade_right } = animations
  return (
    <Modal className={ fade_right }>
      <ModalLayout onClick={ handleIsOpen } className={ fade_right }/>
      <UserMoldaInfo user={ user }  />
    </Modal>
  )
}
