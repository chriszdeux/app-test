import axios from 'axios';
const url = `https://reqres.in/api/users?page=`
export const fetchUsers = async ( page = 1 ) => {
  return await axios.get(`${ url }${ page }`).then(response => {
    return response.data
  })
}