import React from 'react'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom';

const SeatGrid = () => {
    const { title } = useParams();
    console.log(title);
    function clicked(e) {
        e.target.classList.add('selected')
    }
    return (
        <section className='seat-grid-section'>
            <p className='price'>Price 120</p>
            <div className="seat-number">
                <div className="seat-top-number">1</div>
                <div className="seat-top-number">2</div>
                <div className="seat-top-number">3</div>
                <div className="seat-top-number">4</div>
                <div className="seat-top-number">5</div>
                <div className="seat-top-number">6</div>
                <div className="seat-top-number">7</div>
                <div className="seat-top-number">8</div>
                <div className="seat-top-number">9</div>
                <div className="seat-top-number">10</div>
                <div className="seat-top-number">11</div>
                <div className="seat-top-number">12</div>
                <div className="seat-top-number">13</div>
                <div className="seat-top-number">14</div>
                <div className="seat-top-number">15</div>
                <div className="seat-top-number">16</div>
                <div className="seat-top-number">17</div>
            </div>
            <div className="row">
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
            </div>
            <div className="row">
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
            </div>
            <div className="row">
                <div className="seat" onClick={(e) => clicked(e)} ></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat occupied"></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
            </div>
            <div className="row">
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
            </div>
            <div className="row">
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat occupied"></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
            </div>
            <div className="row">
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
                <div className="seat" onClick={(e) => clicked(e)}></div>
            </div>
            <hr className='screen' />
            <div className="btn-book">
                <Button variant="contained" size="large" color="error" onClick={() => {
                    alert(`You have booked tickets for ${title}`);
                }} >
                    Book Tickets
                </Button>
            </div>
        </section>
    )
}

export default SeatGrid