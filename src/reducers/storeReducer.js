import { types } from "../types/types";

const {  storage_users, clear_storage,  storage_posts, storage_comments, merge_storage, filter_posts, edit_post, delete_post } = types
const initialState = {
  users: [],
  posts: [],
  comments: [],
  fullData: [],
  filterPostById: []
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
      
      case filter_posts:
        // debugger
        
        return {
          ...state,
          filterPostById: state.posts.filter(post => post.userId === action.payload)
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
    
      case edit_post:
        // debugger
        const { post_edit, id } = action.payload
        // debugger
        return {
          ...state,
          posts: state.posts.map(item => {
            if(item.id === id) {
              // debugger
              return {
                ...item,
                body: post_edit
              }
            } else {
              return item
            }
  
          })
        }
      
      case delete_post:
        return {
          ...state,
          posts: state.posts.filter(item => item.id !== action.payload)
        }

      case clear_storage:
        return []
    default:
      return state
  }
}