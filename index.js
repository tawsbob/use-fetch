import { useState, useCallback } from 'react';

function useFetch(){
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);

    const call = (url, options){
        return fetch(url, options)
    }

}

export default useFetch;