import axios from 'axios'
import { useState, useEffect } from 'react'


const useFetch = (url) => {
    

    // const fetchData = async () => {
    //     try {
    //         const res = await axios.get(url)
    //         setData(res.data)
    //         setLoading(false)
    //     }
    //     catch (error) {
    //         setError(error.message)
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    

    return { data, loading, error }
}

export default useFetch