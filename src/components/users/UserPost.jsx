import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useOpenComponent } from '../../hooks/useOpenComponent'
import { Paragrahp, SubTitle, Text } from '../../styles/global-styles'
import { Input } from '../../styles/login-style'
import { InputEdit, Post, PostBody } from '../../styles/users-style'
import { Comments } from './Comments'
import { EditDeletePost } from './EditDeletePost'
import { deletePost, editPost } from '../../actions/userActions'
import { useDispatch } from 'react-redux'
import { mergeData } from '../../actions/storeDataAction'
export const UserPost = ({ post }) => {
  const { body, title, id } = post
  const dispatch = useDispatch()
  // debugger
  const { isOpen, handleIsOpen } = useOpenComponent()
  const { inputValues, handleInputChange } = useForm()
  const { post_edit } = inputValues
  const handleEditPost = () => {
    dispatch(editPost({post_edit, id}))
    setTimeout(() => {
      dispatch(mergeData())
    }, 300);
    handleIsOpen()
  }

  const handleDeletePost = () => {
    dispatch(deletePost(id))
    setTimeout(() => {
      dispatch(mergeData())
    }, 300);
  }
  return (
    <Post>
      {/* <SubTitle>{ name.slice(0,15) }</SubTitle> */}
      <Text>{ title }</Text>
      {
        isOpen
          ? <InputEdit placeholder={ body } name="post_edit" value={ post_edit } onChange={ handleInputChange } autoFocus/>
          : <PostBody>{ post_edit.length === 0 ? body : post_edit}</PostBody>
      }
      <EditDeletePost values={{ isOpen, handleIsOpen, handleEditPost, handleDeletePost }}/>
      
      {/* <Comments post={ post }/> */}
    </Post>
  )
}
