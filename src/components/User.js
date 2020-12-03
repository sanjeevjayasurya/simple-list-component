import React, { useEffect, useState } from 'react'

export default function GithubUser({ login }) {
    const { loading, data, error } = useFetch(
        `https://api.github.com/users/${login}`);
    if (loading) return <p>Loading ...</p>
    if (error) return <pre>{error}</pre>
    if (!data) return null

    return (
        <div className="githubUser">
            <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    );
}