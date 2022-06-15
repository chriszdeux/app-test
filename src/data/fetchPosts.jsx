import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/comments?postId=';

export const fetchPosts = async  ( id ) => {
  return await axios.get(`${ url }${id}`).then(response => {
    return response.data
  })
}