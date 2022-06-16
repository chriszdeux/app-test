import { useEffect, useRef, useState } from "react"
import { login } from "../../data/login"

export const useLogin = (log) => {
  // debugger
  const [data, setData] = useState({
    loading: true,
    login: {},
    error: {
      isError: false,
      err: '',
      code: ''
    },
  })


  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [ ])

  const handleSubmit = () => {

        // debugger
        login(log)
        .then(item => {
          // debugger
          if(!isMounted.current) {
            setData({
              ...data,
              login: {
                ...log, token: item
              },
              loading: false
            })
          } else {
            setData({
              ...data,
              loading: false,
              error: {
                isError: true,
                err: 'Problems with data',
                code: 'Error'
              }
            })
          }
        }).catch(error => {
          setData({
            ...data,
            error: {
              isError: error?.isAxiosError,
              err: error.message,
              code: error.code
            }
          })
          console.error(new Error(`Connection Error`))
        })

  }

  

  return {data, handleSubmit}
}