import { useState, useCallback } from 'react';

export const useFetch = ({loadingState, responseState, errorState}) => {
    const [ loading, setLoading ] = loadingState ? loadingState: useState(false);
    const [ response, setResponse ] = responseState ? responseState: useState(null);
    const [ error, setError ] = errorState ? errorState: useState(null);
    const [ options, setError ] = errorState ? errorState: useState(null);

    const reset = useCallback(() => {
        setLoading(true)
        setResponse(null)
        setError(null)
    }, []);

    const handleResponse = useCallback((res) => {
        return res
            .json()
            .then(setResponse)
            .catch(setError)

    }, []);

    const turnOffLoading = useCallback(() => setLoading(false), []);

    const call = useCallback((url, options = { json: false }) => {
        reset();

        fetch(url, options)
            .then(handleResponse)
            .catch(setError)
            .finally(turnOffLoading);
    }, []);

    return {
        loading,
        response,
        error,
        call
    }
}
