import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateImg from "../../assets/create-demo.svg";
import Check from "../../assets/check.svg";
const Create = () => {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    eventHost: "",
    startDate: "",
    endDate: "",
    location: "",
    image: "",
  });

  const handleCreateEvent = () => {
    navigate("/event", { state: eventDetails });
  };
  return (
    <>
      <div className="create-page-container-wrap">
        <div className="create-page-container">
          <div className="create-page-input">
            <h1>Create Event</h1>
            <div className="create-page-input-feilds">
              <div className="create-page-input-container">
                <label htmlFor="">🎉 My event is called</label>
                <div className="create-page-input-container-input">
                  <input
                    onChange={(e) => {
                      setEventDetails({
                        ...eventDetails,
                        eventName: e.target.value,
                      });
                    }}
                    type="text"
                    placeholder="Event title"
                  />
                  {/* <button>+ Add description</button> */}
                </div>
              </div>
              <div className="create-page-input-container">
                <label htmlFor="">✏️ Host Name</label>
                <div className="create-page-input-container-input">
                  <input
                    type="text"
                    placeholder="Event Host Name"
                    onChange={(e) => {
                      setEventDetails({
                        ...eventDetails,
                        eventHost: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="create-page-input-container-dates">
                <div className="create-page-input-container">
                  <label htmlFor="">🗓 It starts at</label>
                  <div className="create-page-input-container-input">
                    <input
                      type="date"
                      onChange={(e) => {
                        setEventDetails({
                          ...eventDetails,
                          startDate: e.target.value,
                        });
                      }}
                      placeholder="Jul 14, 2021"
                    />
                  </div>
                </div>
                <div className="create-page-input-container">
                  <label htmlFor="">🏁 It ends at</label>
                  <div className="create-page-input-container-input">
                    <input
                      type="date"
                      onChange={(e) => {
                        setEventDetails({
                          ...eventDetails,
                          endDate: e.target.value,
                        });
                      }}
                      placeholder="Jul 14, 2021"
                    />
                  </div>
                </div>
              </div>
              <p>
                <img src={Check} alt="" /> This event will take place on the
                July 14,2021 from 2:00 PM untill 03:45PM
              </p>
              <div className="create-page-input-container">
                <label htmlFor="">📍 It’s happening at</label>
                <div className="create-page-input-container-input">
                  <input
                    onChange={(e) => {
                      setEventDetails({
                        ...eventDetails,
                        location: e.target.value,
                      });
                    }}
                    type="text"
                    placeholder=" Location"
                  />
                </div>
              </div>
              <div className="btn" onClick={handleCreateEvent}>
                <button>Next</button>
              </div>
            </div>
          </div>
          <div className="create-page-img">
            <label htmlFor="">
              <input
                type={"file"}
                accept="image/*"
                onChange={(e) => {
                  setEventDetails({
                    ...eventDetails,
                    image: URL.createObjectURL(e.target.files[0]),
                  });
                }}
              />
              {eventDetails.image ? (
                <img className="uploade-img" src={eventDetails.image} alt="" />
              ) : (
                <img src={CreateImg} alt="" />
              )}
              {/* <img src={CreateImg} alt="" /> */}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
