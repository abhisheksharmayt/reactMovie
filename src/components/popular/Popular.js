import React from 'react'
import { useFetch } from '../../Hook/useFetch'
import MovieCard from '../moviecard/MovieCard'
import Loading from '../loading/Loading'
import './style.css'

const Popular = () => {
    const { data, loading } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
    // console.log(data);
    const config = useFetch(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`)
    // console.log(config);
    if (loading) {
        return <Loading/>
    }
    else {
        return (
            <>
                <section className="popular-section">
                    <h2 className="title">Popular Movies</h2>
                    <div className="popular-movies-div">
                        {
                            data.results.map((movie) => {
                                return <MovieCard key={movie.id} movie={movie} />
                            })
                        }
                    </div>
                </section>
            </>
        )
    }
}

export default Popular