import React from 'react'
import './style.css'
// import { useFetch } from '../../Hook/useFetch' src/images/default_img.png
import default_img from '../../images/default_img.png'

const ActorCard = ({ credit_id, character, name, profile_path }) => {
    const profile_image = (profile_path === null) ? (default_img):(`https://image.tmdb.org/t/p/h632${profile_path}`);
    console.log(name, profile_image);
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