import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EventCardImg from "../../assets/movie-card.svg"
const index = () => {
    // const navigate = useNavigate();
  return (
   <>
    <div className="landing-page-container">
          <div className="landing-page-img">
                <img src={EventCardImg} alt="" />
            </div>  
        <div className="landing-page-content">
            <h1>Imagine if <br /> <span>Snapchat</span>  had events.</h1>
            <p>Easily host and share events with your friends across any social media.</p>
            <div className="landing-page-img landing-page-img-phone">
                <img src={EventCardImg} alt="" />
            </div>  
            <div className="btn">
                <button  >🎉 Create my event</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default index