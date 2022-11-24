import React, {useState, useEffect} from 'react'
// const api_key = env.process.REACT_APP_API_KEY

export const useFetch = (url)=>{
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setData(data);
            });
    },[url]);
    return {data, loading};
}