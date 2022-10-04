import React from 'react'
import LandingImg from "../../assets/cake-img.svg"
import { useLocation } from "react-router-dom";
import moment from "moment/moment";
const Event = () => {
    const { state } = useLocation();
  return (
    <div className="event-container">
    <div className="event-container-text">
        <h1>Birthday Bash</h1>
        <p>Hosted by <span>Elysia</span> </p>
        <div className="event-container-card">

        </div>
    </div>
    <div className="event-container-img">
        <img src={LandingImg} alt="" />
    </div>
   </div>
  )
}

export default Event