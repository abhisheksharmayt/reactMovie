import React, { useEffect, useState } from 'react'
import { useFetch } from '../../Hook/useFetch';
import { BiSearchAlt } from 'react-icons/bi'
import Popular from '../popular/Popular'
import Search from '../search/Search'
import Loading from '../loading/Loading';
import './style.css'
const api_key = process.env.REACT_APP_API_KEY;

const Trending = () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`
    const { loading, data } = useFetch(url)
    const [popular, setPopular] = useState(true);
    const [search, setSearch] = useState("");
    useEffect(()=>{
        if(search!==""){
            setPopular(false);
        }
        else{
            setPopular(true);
        }
    },[search]);
    // console.log("This is ",search, result);
    if (loading) {
        return <Loading/>
    }
    else {
        const { results } = data;
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
                                <label htmlFor="movieSearch"><BiSearchAlt className='searchLogo' /></label>
                                <input type="text" id="movieSearch" placeholder="Search Movie" onChange={(e) => {
                                    setSearch(e.target.value);
                                }} />
                            </form>
                        </div>
                    </div>
                </section>
                {(popular) ? <Popular/> : <Search search={search}/>}
            </>
        )
    }
}

export default Trending