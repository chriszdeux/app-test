import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { mergeData, storePosts, storeUsers } from '../../actions/storeDataAction'
import { animations } from '../../constant/animations'
import { data_posts } from '../../constant/data-posts'
import { data_users } from '../../constant/data-users'
import { ListUsers } from './ListUsers'
export const UsersScreen = () => {
  const { logged } = useSelector(state => state.login_reducer)
  const UsersData = useSelector(state => state.storage_reducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    UsersData.users.length === 0 && dispatch(storeUsers(data_users.data))
  }, [ ])
  useEffect(() => {
    UsersData.posts.length === 0 && dispatch(storePosts(data_posts))
  }, [ ])

  useEffect(() => {
    logged === false && navigate('/app-test/')
  }, [])
  const { fade_in, fade_out } = animations
  return (
   <ListUsers /> 
  )
}
