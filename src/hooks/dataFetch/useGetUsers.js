import { useEffect, useRef, useState } from "react"
import { fetchUsers } from "../../data/fetchUsers"

export const useGetUsers = ( page ) => {
  const [data, setData] = useState({
    loading: true,
    users: [],
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

  useEffect(() => {
    fetchUsers(page)
      .then(item => {
        if(!isMounted.current) {
          // debugger
          setData({
            ...data,
            users: item.data,
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
  }, [ page ])

  return data
}