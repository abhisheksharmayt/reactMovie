import React from 'react'
import './style.css'
import default_img from '../../images/default_img.png'
const MovieCard = ({ movie }) => {
    const moviePoster = (movie.poster_path === null) ? (default_img) : (`https://image.tmdb.org/t/p/w342${movie.poster_path}`);
    return (
        <div className='movie-card-div'>
            <img src={moviePoster} alt={movie.title} className="movie-poster" loading="lazy" />
            <a href={`movie/${movie.id}`}>
                <div className='poster-overlay'>
                    <h4 className="movie-title">
                        {movie.original_title}
                    </h4>
                </div>
            </a>
        </div>
    )
}

export default MovieCard