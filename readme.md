# use-fetching
Whis hook was developed to work with fetch api in the react functional way, even if you have a context.

## Installation

### from npm
```bash
npm install use-fetching
```
or
```bash
yarn add use-fetching
```

## Usage

```javascript

function MyComponent(){

     const { 
            loading,    // Boolean to control loading instate in your component.
            response,   // Fetch response object json.
            error,      // Fetch error object.
            call        // Function to call(url, options = {}) that gonna call "fetch(url, options)".
            } = useFetch()
    

    useEffect(()=>{
        console.log( response )
    }, [response])

    useEffect(()=>{
        call(
            'https://viacep.com.br/ws/20231006/json/unicode/',
            options // Not mandatory.
            )
    }, [])

    // Continue your code...    
}

```
