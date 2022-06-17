import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterPosts } from '../../actions/userActions'
import { animations } from '../../constant/animations'
import { Paragrahp, SubTitle } from '../../styles/global-styles'
import { BoxDetail, BoxDetailTop } from '../../styles/login-style'
import { Card, CardImage, Image, ModalContent } from '../../styles/users-style'
import { UserPosts } from './UserPosts'

export const UserMoldaInfo = ({ user }) => {
  const { avatar, first_name, last_name, email, id} = user
  const { posts } = useSelector(state => state.storage_reducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(filterPosts(id))
  }, [ id, posts.length ])
  // useEffect(() )
  // debugger
  const { fade_right } = animations
  return (
    <ModalContent className={ fade_right } style={{ animationDelay: '1s' }}>
    <Card>
      <CardImage>
        <Image src={ avatar } alt={ first_name } />
      </CardImage>
      <SubTitle>{ first_name } { last_name }</SubTitle>
      <Paragrahp>{ email }</Paragrahp>
    </Card>
    <UserPosts />
    <BoxDetail></BoxDetail>
    <BoxDetailTop></BoxDetailTop>
    </ModalContent>
  )
}
