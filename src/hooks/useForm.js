import { useState } from "react"

export const useForm = ( initialState = { } ) => {
  
  const [inputValues, setInputValues] = useState({
    post: '',
    post_edit: '',
    name_edit: '',
    email: '',
    password: ''
  })
  
  const handleInputChange = ( {target} ) => {

    setInputValues({
      ...inputValues,
      [target.name]:target.value
    })

  }

  const handleSubmit = ( e ) => {
    e.preventDefault();

  }

  
  // 154

  return {handleInputChange, inputValues, setInputValues}
}