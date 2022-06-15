import React from 'react'
import { Button, DeleteButton, RegularButton } from '../../styles/global-styles'
import { ButtonsContainer } from '../../styles/users-style'

export const EditDeletePost = () => {
  return (
    <ButtonsContainer>
      <DeleteButton>Delete</DeleteButton>
      <RegularButton>Edit</RegularButton>
    </ButtonsContainer>
  )
}
