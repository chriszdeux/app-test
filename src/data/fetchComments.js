import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/comments';

export const fetchComments = async  (  ) => {
  return await axios.get(`${ url }`).then(response => {
    return response.data
  })
}