import { types } from "../types/types"

const {  clear_storage, storage_users, storage_posts, storage_comments, merge_storage } = types

export const storeUsers = ( data ) => {
  return {
    type: storage_users,
    payload: data
  }
}

export const storePosts = ( data ) => {
  return {
    type: storage_posts,
    payload: data
  }
}

export const storeComments = ( data ) => {
  return {
    type: storage_comments,
    payload: data
  }
}

export const mergeData = (  ) => {
  return {
    type: merge_storage,
    payload: false
  }
}

export const clearStorage = (  ) => {
  return {
    type: clear_storage,
    payload: false
  }
}