import React from 'react'

// custom hook
function useFetch(uri) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        if(!uri) return
        fetch(uri)
        .then(response => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, [uri])

    return {
        data,
        error,
        loading
    }
}


function Fetch({
    uri,
    renderSuccess,
    loadingFallback = <p>loading...</p>,
    renderError = error => (
        <pre>{JSON.stringify(error, null, 2)}</pre>)
}) {
    const { loading, data, error } = useFetch(uri); if (loading) return loadingFallback;
    if (error) return renderError(error);
    if (data) return renderSuccess({ data });
}