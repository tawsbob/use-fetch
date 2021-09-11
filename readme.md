# useFetch react hook
this hook was developed to work with search in the react functional way

## Usage

```javascript

function MyComponent(){

     const { 
            loading,    //  boolean =>  to control loading instate in your component
            response,   // fetch response object
            error,      // fetch error object
            call        // function to call( url, options = {} ) == fetch(url, options) 
            } = useFetch()
    

    useEffect(()=>{
        console.log( response )
    }, [response])

    useEffect(()=>{
        call(
            'https://viacep.com.br/ws/20231006/json/unicode/',
            { json: true } // passing json true make response object to be fetch response.json() result
            )
    }, [])

    return null
    
}

```