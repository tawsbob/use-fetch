import { useCallback, useState } from 'react';

const useFetch = ({ loadingState = undefined, responseState = undefined, errorState = undefined }) => {
  const [loading, setLoading] = loadingState || useState(false);
  const [response, setResponse] = responseState || useState(null);
  const [error, setError] = errorState || useState(null);

  const reset = useCallback(() => {
    setLoading(true);
    setResponse(null);
    setError(null);
  }, []);

  const call = useCallback(async (url, options = {}) => {
    try {
      reset();

      const response = await fetch(url, options);
      const data = (await response.json()) || {};

      setResponse(data);

      return data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    response,
    error,
    call
  };
};

export default useFetch;
