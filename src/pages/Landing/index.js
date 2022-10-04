import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EventCardImg from "../../assets/movie-card.svg"
const Index = () => {
    const navigate = useNavigate();
    const navigation=()=>{
        navigate('/event/create')
    }
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
                <button onClick={navigation} >🎉 Create my event</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default Index