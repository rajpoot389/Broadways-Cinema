import React from 'react'
import Nav from '../Nav'
import { useParams } from 'react-router-dom';
import data from '../../data/movies.json';
import SeatsHead from './SeatsHead';
import './seats.css'
import SeatGrid from './SeatGrid';

const Seats = () => {
    const { title, genres } = useParams();
    let result = data.movies.filter((val) => {
        return (val.title === title);
    })
    console.log(result);
    return (
        <>
            <Nav />
            <section seats-main-section>
                <SeatsHead data={result} />
                <SeatGrid />
            </section>
        </>
    )
}

export default Seats