import { Dispatch, SetStateAction, useCallback, useState } from 'react';

const useFetch = (
  {
    loadingState,
    responseState,
    errorState
  }: {
    loadingState?: [boolean, Dispatch<SetStateAction<boolean>>];
    responseState?: [any, Dispatch<SetStateAction<any>>];
    errorState?: [any, Dispatch<SetStateAction<any>>];
  } = {
    loadingState: undefined,
    responseState: undefined,
    errorState: undefined
  }
): {
  loading: boolean;
  response: any;
  error: any;
  call: (url: string) => Promise<any>;
} => {
  const loadingLocalState = useState<boolean>(false);
  const responseLocalState = useState<any>(null);
  const errorLocalState = useState<any>(null);

  const [loading, setLoading] = loadingState ?? loadingLocalState;
  const [response, setResponse] = responseState ?? responseLocalState;
  const [error, setError] = errorState ?? errorLocalState;

  const call = useCallback(
    async (url: string, options: {} = {}): Promise<any> => {
      try {
        setLoading(true);

        const response = await fetch(url, options);
        const data = (await response.json()) ?? {};

        setResponse(data);

        return data;
      } catch (error) {
        setError(error);
        return {};
      } finally {
        setLoading(false);
      }
    },
    [setError, setLoading, setResponse]
  );

  return {
    loading,
    response,
    error,
    call
  };
};

export default useFetch;
