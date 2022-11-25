import React, { useState, useRef, useEffect } from 'react'
import MovieCard from '../moviecard/MovieCard';
import { BiSearchAlt } from 'react-icons/bi'
import { useFetch } from '../../Hook/useFetch';
import Loading from '../loading/Loading';

const SearchBar = ({ search }) => {
    const { data, loading } = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=7e195b1e8fc9e9e7438678e65ac775ef&language=en-US&query=%22${search}%22`)
    // useEffect(()=>{
    // },[search])
    if (loading) {
        return <Loading/>
    }
    else {
        return (
            <section className="popular-section">
                <h2 className="title">Search Result</h2>
                {(data.results.length == 0) ? 
                (<p style={{textAlign: 'center', fontSize: '3rem'}}>No Results Found</p>)
                : (<div className="popular-movies-div">
                    {
                        data.results.map((movie) => {
                            return <MovieCard key={movie.id} movie={movie} />
                        })
                    }
                </div>)}
            </section>
        )
    }
}

export default SearchBar