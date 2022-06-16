import { generateToken } from "../constant/tokenGeneratos";
import { types } from "../types/types";

const { log_in, log_out } = types
const initialState = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
  logged: false,
  token: '',
  errorLogin: false
}
export const loginReducer = ( state = initialState, action ) => {
  // debugger
  switch (action.type) {
    case log_in:
      // debugger
      
      if(action.payload.email === state.email && action.payload.password === state.password) {
        return {
          email: action.payload.email,
          token: generateToken(),
          logged: true
        }
      } else {
        return initialState
      }
    
    case log_out:
      return initialState
    default:
      return state
  }
}