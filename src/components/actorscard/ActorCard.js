import React from 'react'
import './style.css'
// import { useFetch } from '../../Hook/useFetch'
import './style.css'

const ActorCard = ({ credit_id, character, name, profile_path }) => {
    const profile_image = `https://image.tmdb.org/t/p/h632${profile_path}`;
  return (
      <div className='movie-card-div actor-card-div'>
          <img src={profile_image} alt={name} className="actor-image" loading="lazy" />
          {/* <a href={`movie/${movie.id}`}> */}
              <div className='movie-cast-info'>
                  <h4 className="movie-title">
                      {character}
                  </h4>
                  <h4 className="movie-title">
                      {name}
                  </h4>
              </div>
          {/* </a> */}
      </div>
  )
}

export default ActorCard