import React, { useEffect, useState } from 'react'
import { useFetch } from '../../Hook/useFetch';
import { BiSearchAlt } from 'react-icons/bi'
import Popular from '../popular/Popular'
import './style.css'
const api_key = process.env.REACT_APP_API_KEY;
const Trending = () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`
    const { loading, data } = useFetch(url)
    const { results } = data;
    if (loading) {
        return <h1>loading..</h1>
    }
    else {
        const image = `https://image.tmdb.org/t/p/w1280${results[0].backdrop_path}`;
        return (
            <>
                <section className='trending-section'>
                    <div className="trending-div">
                        <img className="backdrop-img" src={image} alt={results[0].title} />
                        <div className='backdrop-img-overlay'></div>
                        <div className="about-trending">
                            <h1>{results[0].title}</h1>
                            <p>{results[0].overview}</p>
                        </div>
                    </div>
                    <div className='search-bar-div'>
                        <div className="form-div">
                            <form action="">
                                <label htmlFor="movieSearch"><BiSearchAlt className='searchLogo'/></label>
                                <input type="text" id="movieSearch" placeholder="Search Movie"/>
                            </form>
                        </div>
                    </div>
                </section>
                <Popular/>
            </>
        )
    }
}

export default Trending