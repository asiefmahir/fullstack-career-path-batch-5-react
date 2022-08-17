import { useState, useEffect } from 'react'


export function useFetchLogic (initialState, url) {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
         fetch(url)
            .then(response => response.json())
            .then(result => {
                setIsLoading(false);
                setData(result)
                setErrorMessage('')
            })
            .catch((err) => {
                setIsLoading(false);
                setErrorMessage(err.message)
            })
    }, [])

    return {
        data,
        isLoading,
        errorMessage
    }
}