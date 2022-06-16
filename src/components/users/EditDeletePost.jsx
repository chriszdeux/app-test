import React from 'react'
import { AcceptButton, Button, DeleteButton, RegularButton } from '../../styles/global-styles'
import { ButtonsContainer } from '../../styles/users-style'
import { animations } from '../../constant/animations'
export const EditDeletePost = ({ values }) => {
  const { isOpen, handleIsOpen, handleEditPost, handleDeletePost } = values
  const { fade_top }  = animations
  return (
    <ButtonsContainer className={ fade_top }>
      {
        !isOpen 
         ?  <DeleteButton onClick={ handleDeletePost }>Delete</DeleteButton>
         :  <DeleteButton onClick={ handleIsOpen }>Cancel</DeleteButton>
      }
      {
        isOpen
        ? <AcceptButton onClick={ handleEditPost }>Confirm</AcceptButton>
        : <RegularButton onClick={ handleIsOpen }>Edit</RegularButton>
      }
    </ButtonsContainer>
  )
}
