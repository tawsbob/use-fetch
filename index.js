import { useState, useCallback } from 'react';

export function useFetch(){
    const [ loading, setLoading ] = useState(false);
    const [ response, setResponse ] = useState(null);
    const [ error, setError ] = useState(null);
    
    const reset = useCallback(() => {
        setLoading(true)
        setResponse(null)
        setError(null)
    }, [])
    
     const handleResponse = (res) => {
        if(json)
            return res
            .json()
            .then(setResponse)
            .catch(setError)

        return setResponse(res)
    }

    const turnOffLoading = () => setLoading(false)

    const call = useCallback((url, options = { json: false }) = >{
        const { json } = options

        reset()

        fetch(url, options)
            .then(handleResponse)
            .catch(setError)
            .finally(turnOffLoading)
    }, [])

    return {
        loading,
        response,
        error,
        call
    }
}
