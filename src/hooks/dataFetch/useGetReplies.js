import { useEffect, useRef, useState } from "react"
import { fetchComments } from "../../data/fetchComments"
import { fetchPosts } from "../../data/fetchPosts"

export const useGetComments = (  ) => {
  const [data, setData] = useState({
    loading: true,
    comments: [],
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
    fetchComments()
      .then(item => {
        if(!isMounted.current) {
          setData({
            ...data,
            comments: item,
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
  }, [  ])

  return data
}