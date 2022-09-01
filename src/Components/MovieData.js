import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import data from '../data/movies.json';
import { Button } from '@mui/material';
import Nav from './Nav';


const MovieData = () => {
    const { id } = useParams();

    return (
        <>
            <Nav />
            <section className='movieDiscription-section'>
                {
                    data.movies.filter((val) => {
                        return (val.title === id);
                    }).map((val) => {
                        return (
                            <>
                                <img src={val.img.thumbnail} alt="" />
                                <div className="movie-disc">
                                    <p className='align-top'>Back to all movies</p>

                                    <p className='movie-title'>{val.title}</p>
                                    <div className="lists">
                                        <p>{`${parseInt(val.durationMins / 60)}h ${val.durationMins - (((parseInt(val.durationMins / 60) * 60)))}mins`}</p>
                                        <ul>
                                            <li>{`${val.genres[0]}, ${val.genres[1]}`}</li>
                                            <li>{val.ageCertificate}</li>
                                        </ul>
                                    </div>
                                    <p className='about'>About the movie</p>
                                    <p className='movie-dicsription-width'>{val.description}</p>
                                    <NavLink to={'../seats/' + val.title} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" color="error" >
                                            Book Tickets
                                        </Button>
                                    </NavLink>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}

export default MovieData