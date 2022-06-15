import { useEffect, useRef, useState } from "react"
import { fetchPosts } from "../../data/fetchPosts"

export const useGetPosts = ( id ) => {
  const [data, setData] = useState({
    loading: true,
    posts: [],
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
    fetchPosts(id)
      .then(item => {
        if(!isMounted.current) {
          setData({
            ...data,
            posts: item,
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
  }, [ id ])

  return data
}