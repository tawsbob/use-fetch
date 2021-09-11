import { useState, useCallback } from 'react';

function useFetch(){

    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);

    const call = useCallback((url, options)=>{

            setLoading(true)

            fetch(url, options)
                .then(setData)
                .catch(setError)
                .finally(()=>{ setLoading(false) })
    }, [])


    return {
        loading,
        data,
        error
    }


}

export default useFetch;