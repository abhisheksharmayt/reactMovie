import React from 'react'
import { useFetch } from '../../Hook/useFetch'
import { useParams } from 'react-router-dom'
import ActorCard from '../actorscard/ActorCard'

const Actor = () => {
    const { id } = useParams();
    const { data, loading } = useFetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
    if (loading) {
        return <h1>Loading..</h1>
    }
    else {
        const { cast } = data;
        console.log(cast);
        return (
            <section className="popular-section">
                <h2 className="title">Actors</h2>
                <div className="popular-movies-div">
                    {
                        cast.map((curr_cast) => {
                            const { credit_id, character, name, profile_path } = curr_cast
                            console.log(curr_cast);
                            return <ActorCard key={credit_id} character={character} name={name} profile_path={profile_path} />
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Actor