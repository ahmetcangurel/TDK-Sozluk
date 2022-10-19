import axios from 'axios'
import { useState, useEffect } from 'react'


const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const res = await axios.get(url)
            setData(res.data)
            setLoading(false)
        }
        catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, loading, error }
}

export default useFetch