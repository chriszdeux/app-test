import { types } from "../types/types";

const { 
  add_post,
  edit_post,
  delete_post,
  filter_comments, } = types;


  export const addPost = ( data ) => {
    return {
      type: add_post,
      payload: data
    }
  }


  export const editPost = ( id ) => {
    return {
      type: edit_post,
      payload: id
    }
  }

  export const deletePost = ( id ) => {
    return {
      type: delete_post,
      payload: id
    }
  }

  export const filterPosts = ( id ) => {
    return {
      type: filter_comments,
      payload: id
    }
  }