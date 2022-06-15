import { types } from "../types/types";

const {  storage_users, storage_posts, storage_comments, merge_storage, filter_comments } = types
const initialState = {
  users: [],
  posts: [],
  comments: [],
  fullData: [],
  filterComments: []
}
export const storeReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case storage_users:
      return {
        ...state,
        users: [...action.payload]
      }
    case storage_posts:
      return {
        ...state,
        posts: [...action.payload]
      }
    
      case storage_comments:
      return {
        ...state,
        comments: [...action.payload]
      }
    
    case merge_storage:
      return {
        ...state,
        fullData: state.users.map(user => {
          // debugger
          return {
            ...user,
            posts: state.posts.filter(post => {
              if(post.userId === user.id) {
                return post
              }
            })
          }
        })
      }
      // debugger
    
      case filter_comments:
        // const a = {
        //   ...state,
        //   filterComments: state.comments.filter(item => {
        //     debugger
        //     // return item.id === action.payload
        //   })
        // }
        // debugger
        return []
    default:
      return state
  }
}