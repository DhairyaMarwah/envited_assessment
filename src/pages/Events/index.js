import React from "react";
import LandingImg from "../../assets/cake-img.svg";
import DateImg from "../../assets/date.svg";
import LocImg from "../../assets/location.svg";
import ArrowImg from "../../assets/arrow.svg";
import { useLocation } from "react-router-dom";
import moment from "moment/moment";
const Event = () => {
  const { state } = useLocation();
  return (
    <div className="event-wrap">
      <div className="event-container">
        <div className="event-container-text">
          <h1>{state?.eventName ? state?.eventName : "Birthday Bash"}</h1>
          <p>
            Hosted by{" "}
            <span>{state?.eventHost ? state?.eventName : "Elysia"}</span>{" "}
          </p>
          <div className="event-container-card">
            <div className="event-container-card-img">
              <img src={DateImg} alt="" />
            </div>
            <div className="event-container-card-details">
              <h1>
                {state?.startDate
                  ? moment(state?.startDate).format("LL")
                  : "18 August 6:00PM"}
              </h1>
              <p>
                to{" "}
                {state?.endDate ? (
                  moment(state?.endDate).format("LL")
                ) : (
                  <b>19 August 6:00PM</b>
                )}{" "}
                UTC +10
              </p>
            </div>
            <img src={ArrowImg} alt="" />
          </div>
          <div className="event-container-card">
            <div className="event-container-card-img">
              <img src={LocImg} alt="" />
            </div>
            <div className="event-container-card-details">
              <h1>Street name</h1>
              <p>
                {state?.location ? state?.location : "Suburb, State, Postcode"}
              </p>
            </div>
            <img src={ArrowImg} alt="" />
          </div>
        </div>
        <div className="event-container-img">
          <img src={state?.image ? state.image : LandingImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Event;
