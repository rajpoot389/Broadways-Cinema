import React from 'react'
import Carasoul from './Carasoul'
import Nav from './Nav';
import ShowData from './ShowData';
const Home = () => {
    return (
        <section className='home-main-section'>
            <Nav />
            <Carasoul />
            <ShowData />
        </section>
    )
}

export default Home