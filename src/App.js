import React from 'react'
import Navbar from './components/navbar/Navbar'
import Trending from './components/trending/Trending'
import Movie from './components/movie/Movie'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Trending/>}></Route>
          <Route path='/movie/:id' element={<Movie/>}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App

//https://api.themoviedb.org/3/movie/157336?api_key=