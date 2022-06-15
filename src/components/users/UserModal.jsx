import React from 'react'
import { useFetchPosts } from '../../hooks/dataFetch/useFetchPosts'
import { Modal, ModalLayout } from '../../styles/users-style'
import { UserCard } from './UserCard'
import { UserMoldaInfo } from './UserMoldaInfo'

export const UserModal = ({ values }) => {
  // debuggerer
  const { handleIsOpen, user } = values
  return (
    <Modal>
      <ModalLayout onClick={ handleIsOpen } />
      <UserMoldaInfo user={ user } />
    </Modal>
  )
}
