import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import MovieData from './Components/MovieData';
import Seats from './Components/Seats/Seats';
import './App.css'
import './index.css'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/moviedata/:id' element={<MovieData />} />
                <Route path='/seats/:title' element={<Seats />} />

            </Routes>
        </>

    )
}

export default App