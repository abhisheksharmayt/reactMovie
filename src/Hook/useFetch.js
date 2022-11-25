import React, { useState, useEffect } from 'react'
// const api_key = env.process.REACT_APP_API_KEY

export const useFetch = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const abortController = new AbortController();
        fetch(url, { signal: abortController.signal })
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setData(data);
            })
            .catch((e) => {
                setLoading(true);
                console.log(e);
            })

        return () => {
            abortController.abort();
        }
    }, [url]);
    return { data, loading };
}