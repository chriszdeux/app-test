import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async  (  ) => {
  const data = await axios.get(`${ url }`).then(response => {
    return response.data
  })

  return data
}