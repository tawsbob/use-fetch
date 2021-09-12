import { Dispatch, SetStateAction } from 'react';
declare const useFetch: ({ loadingState, responseState, errorState }: {
    loadingState?: [boolean, Dispatch<SetStateAction<boolean>>] | undefined;
    responseState?: [any, Dispatch<any>] | undefined;
    errorState?: [any, Dispatch<any>] | undefined;
}) => {
    loading: boolean;
    response: any;
    error: any;
    call: (url: string, options?: RequestInit | undefined) => Promise<any>;
};
export default useFetch;
