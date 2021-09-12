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

  const handleResponse = useCallback((res: any) => res.json().then(setResponse).catch(setError), []);

  const turnOffLoading = useCallback(() => setLoading(false), []);

  const call = useCallback((url: string, options: RequestInit) => {
    reset();

    fetch(url, options).then(handleResponse).catch(setError).finally(turnOffLoading);
  }, []);

  return {
    loading,
    response,
    error,
    call
  };
};

export default useFetch;
