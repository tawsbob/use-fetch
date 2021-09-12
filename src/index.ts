import { Dispatch, SetStateAction, useCallback, useState } from 'react';

const useFetch = ({
  loadingState,
  responseState,
  errorState
}: {
  loadingState?: [boolean, Dispatch<SetStateAction<boolean>>];
  responseState?: [any, Dispatch<SetStateAction<any>>];
  errorState?: [any, Dispatch<SetStateAction<any>>];
}) => {
  const [loading, setLoading] = loadingState ?? useState<boolean>(false);
  const [response, setResponse] = responseState ?? useState<any>(null);
  const [error, setError] = errorState ?? useState<any>(null);

  const reset = useCallback(() => {
    setLoading(true);
    setResponse(null);
    setError(null);
  },[] );

  const call = useCallback(async (url: string, options?: RequestInit) => {
    try {
      reset();

      const response =  await fetch(url, options)
      const data = (await response.json()) ?? {};

      setResponse(data);

      return data;
    } catch (error) {
      setError(error);
    }
    finally{
      setLoading(false)
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
	