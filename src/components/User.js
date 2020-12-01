import React, { useEffect, useState } from 'react'

export default function GithubUser({ login }) {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(!login) return
        setLoading(true)
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, [login])

    if(loading) return <p>Loading ...</p>
    if(error) return <pre>{error}</pre>
    if(!data) return null

    return (
        <div className="githubUser">
        <img src={data.avatar_url} alt={data.login} style={{ width: 200 }}
        /> <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>} {data.location && <p>{data.location}</p>}
              </div>
            </div>
        );
}