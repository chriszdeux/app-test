import axios from "axios";

const url = 'https://reqres.in/api/login';

export const login = async ( log ) => {
  // debugger
  const config = {
    method: 'post',
    url: url,
    data: {
      email: log.email,
      password: log.password
    }
  }
  debugger

    const data = await axios({
      method: 'post',
      url: url,
      data: {
        email: log.email,
        password: log.password
      }
    }).then(response => {
      debugger
      return response.data
    })
    debugger
    return data

  
}