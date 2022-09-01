import React from 'react'
import data from '../data/movies.json';
import { NavLink } from 'react-router-dom';

const ShowData = () => {

    return (
        <>
            <section className='Showdata-section'>
                {
                    data.movies.map((val) => {


                        return <NavLink to={'moviedata/' + val.title}>
                            <img src={val.img.thumbnail} alt="movie-poster" />
                        </NavLink>
                    })
                }

            </section >
        </>
    )
}

export default ShowData