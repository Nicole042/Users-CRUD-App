import { useState } from "react"
import axios from 'axios'

const useFetch = (baseUrl) => {
    const [response, setResponse] = useState()
    const [hasError, setHasError] = useState(false)

    //READ
    const getApi = () => {
        const url = `${baseUrl}/users/`
        axios.get(url)
            .then(res => 
            setResponse(res.data),
            setHasError(false))
            .catch(err => setHasError(true))
    }

    //CREATE
    const createApi = (data) => {
        const url = `${baseUrl}/users/`
        axios.post(url, data)
            .then(res => {
                setResponse(res.data),
                setHasError(false),
                setResponse([...response, res.data])
            })
            .catch(err => setHasError(true))
    }

    //DELETE
    const deleteApi = (id) => {
        const url = `${baseUrl}/users/${id}/`
        axios.delete(url)
            .then(res => {
                setResponse(res.data),
                setHasError(false)
                setResponse(response.filter ( user => user.id !== id))
            })
            .catch(err => setHasError(true))
    }

    //UPDATE
    const updateApi = (id, data) => {
        const url = `${baseUrl}/users/${id}/`
        axios.put(url, data)
            .then(res => {
                setResponse(res.data),
                setHasError(false)
                setResponse(response.map ( user => user.id === id ? res.data : user))
            })
            .catch(err => setHasError(true))
    }

    return [response, getApi, createApi, deleteApi, updateApi, hasError, setHasError]
}

export default useFetch