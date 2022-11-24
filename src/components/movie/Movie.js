import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hook/useFetch'
import Actor from '../actor/Actor'
import './style.css'
const Movie = () => {
    const { id } = useParams();
    const { data, loading } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
    const credits = useFetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`);
    // console.log(data);
    if (loading || credits.loading) {
        return <div>loading</div>
    }
    else {
        const backdrop_image = `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`;
        const poster_image = `https://image.tmdb.org/t/p/w780${data.poster_path}`;
        const { crew } = credits.data;
        const director = crew.filter(({ job }) => job === 'Director');
        return (
            <>
                <section className="movie-section">
                    <div className="movie-header">
                        <h2>Home | {data.original_title}</h2>
                    </div>
                    <div className="movie-div" style={{ backgroundImage: `url(${backdrop_image})` }}>
                        <div className='movie-overlay-div'>
                            <div className="poster-image-div">
                                <img className="poster-image" src={poster_image} />
                            </div>
                            <div className="movie-info-div">
                                <h1>{data.title}</h1>
                                <h3>PLOT</h3>
                                <p>{data.overview}</p>
                                <div className='movie-stats'>
                                    <div className="rating">
                                        <p>Rating</p>
                                        <div className='score'>{Math.floor(data.vote_average * 10) / 10}</div>
                                    </div>
                                    <div className="director">
                                        <p>Director</p>
                                        <h5>{director[0].name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='movie-short-info'>
                        <div>
                            <p className="runtime">Running Time: {`${Math.floor(data.runtime / 60)}h ${Math.floor(data.runtime % 60)}m`}</p>
                        </div>
                        <div>
                            <p className="budget">Budget: ${data.budget.toLocaleString()}</p>
                        </div>
                        <div>
                            <p className="revenue">Revenue: {(data.revenue.toLocaleString() !== "0") ? `$${data.revenue.toLocaleString()}` : `Data Not Available`}</p>
                        </div>
                    </div>
                </section>
                <Actor />
            </>
        )
    }
}

export default Movie