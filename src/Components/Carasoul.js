import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import movieData from '../data/movies.json'

import one from '../assets/images/movie1.jpg'
import two from '../assets/images/movie2.jpg'
import three from '../assets/images/movie3.jpg'
import four from '../assets/images/movie4.jpg'
import five from '../assets/images/movie5.jpeg'
import six from '../assets/images/movie6.jpeg'
import seven from '../assets/images/movie7.jpeg'


// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';


const options = {
    padding: { left: '5em', right: '2em' },
    margin: { bottom: '10em', top: 0 },
    width: '100vw',
    height: 300,
    gap: '15rem',
    type: 'loop',
    focus: 'center',
    perPage: 2,
    pagination: false,
    cover: false,
    trimSpace: true, arrows: 'splide__arrows your-class-arrows'

}
const heightWidht = {
    // height: '26rem',
    width: '68rem',
    paddingLeft: '2rem',
    paddingRight: '2rem'
}

const Carasoul = () => {
    return (
        <div className="carasoul-container">

            <Splide aria-label="My Favorite Images" options={options}
            >

                <SplideSlide >
                    <img src={one} alt="Image 1" style={heightWidht} />
                </SplideSlide>
                <SplideSlide >
                    <img src={two} alt="Image 1" style={heightWidht} />
                </SplideSlide>
                <SplideSlide >
                    <img src={three} alt="Image 1" style={heightWidht} />
                </SplideSlide>
                <SplideSlide >
                    <img src={four} alt="Image 1" style={heightWidht} />
                </SplideSlide>
                <SplideSlide >
                    <img src={five} alt="Image 1" style={heightWidht} />
                </SplideSlide>
                <SplideSlide >
                    <img src={seven} alt="Image 1" style={heightWidht} />
                </SplideSlide>

                <SplideSlide >
                    <img src={six} alt="Image 1" style={heightWidht} />
                </SplideSlide>


            </Splide>
        </div>
    )
}

export default Carasoul

