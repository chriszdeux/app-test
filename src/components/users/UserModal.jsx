import React from 'react'
import { animations } from '../../constant/animations'
import { Modal, ModalLayout } from '../../styles/users-style'
import { UserCard } from './UserCard'
import { UserMoldaInfo } from './UserMoldaInfo'
import { Text } from '../../styles/global-styles' 
export const UserModal = ({ values }) => {
  // debuggerer
  const { handleIsOpen, user } = values
  const { fade_right } = animations
  return (
    <Modal className={ fade_right }>
      <Text onClick={handleIsOpen } style={{ position: 'fixed', right: '2rem', top: '1rem', color: '#fff' }}>Close</Text>
      <ModalLayout onClick={ handleIsOpen } className={ fade_right }/>
      <UserMoldaInfo user={ user }  />
    </Modal>
  )
}
