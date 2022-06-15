import axios from 'axios';
const url = `https://reqres.in/api/users?page=`
export const fetchUsers = async (  ) => {
  const page1 = await axios.get(`${ url }1`).then(response => {
    return response.data
  })
  const page2 = await axios.get(`${ url }2`).then(response => {
    return response.data
  })

  const mergePages = [...page1.data, ...page2.data];
  const addingDelay = mergePages.map((item, index) => {
    return {
      ...item,
      delay: `${(index + 1) * .5}s`,
    }
  })

  return addingDelay
}