import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterPosts } from '../../actions/userActions'
import { Title } from '../../styles/global-styles'
import { CommentBox } from '../../styles/users-style'
import { CommentContent } from './CommentContent'

export const Comments = ({ post }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector(state => state.storage_reducer)
  useEffect(() => {
    dispatch(filterPosts(post.id))
  }, [ ])
  // debugger
  return (
    <CommentBox>
      {
        comments.length === 0
          ? <Title>Loading...</Title>
          : comments.map(comment => (
            <CommentContent key={ comment.id }comment={ comment }/>
          ))
      }
    </CommentBox>
  )
}
