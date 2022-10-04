import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [eventDetails , setEventDetails] = useState({
        eventName: "",
        eventHost: "",
        startDate: "",
        endDate : "",
        location : "",
        image : "",
    })

    const handleCreateEvent = () => {
        navigate("/event", { state: eventDetails });
    }
  return (
    <div>Create</div>
  )
}

export default Create