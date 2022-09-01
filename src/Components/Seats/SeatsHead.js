import React from 'react'
import { Button } from '@mui/material';

const SeatsHead = ({ data }) => {
    return (
        <div className="seat-head-container">
            <div className="seat-head-title">
                <h3>{data[0].title} {`(${data[0].ageCertificate})`}</h3>
                <p>Back to all movies</p>
            </div>
            <p >Tomorrow 21 july 2022</p>
            <div className="seat-head-buttons">
                <div className="seat-buttons">
                    <Button variant="contained" size="large" color="success">3:00 PM</Button>
                    <Button variant="outlined" size="large" color="success">6:00 PM</Button>
                    <Button variant="outlined" size="large" color="success">9:00 PM</Button>
                </div>
                <div className="seat-identification">
                    <div className="box sold"></div><p>Sold</p>
                    <div className="box availble"></div><p>Availible</p>
                    <div className="box selected"></div><p>Selected</p>
                </div>
            </div>
        </div>
    )
}
export default SeatsHead;
