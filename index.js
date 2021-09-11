import { useState, useCallback } from 'react';

export function useFetch(){

    const [ loading, setLoading ] = useState(false);
    const [ response, setResponse ] = useState(null);
    const [ error, setError ] = useState(null);

    const call = useCallback((url, options = { json: false })=>{

            const { json } = options

            setLoading(true)

            if(response){
                setResponse(null)
            }

            if(error){
                setError(null)
            }

            fetch(url, options)
                .then((res)=>{

                    if(json){
                        res
                        .json()
                        .then(setResponse)
                        .catch(setError)
                    } else {
                        setResponse(res)
                    }

                })
                .catch(setError)
                .finally(()=>{ setLoading(false) })
    }, [])


    return {
        loading,
        response,
        error,
        call
    }

}