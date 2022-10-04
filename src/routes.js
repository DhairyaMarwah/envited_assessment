import React, { useEffect } from "react";
import { Routes, Route,Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Landing";
// import Home from "./p"
import Event from "./pages/Events";
import Create from "./pages/Events/Create";

const ourRoutes = [
  {
    path: "/",
    exact: true,
    element : <Home />,
  },
  {
    path : "event/create",
    exact : true,
    element : <Create />,
  },
  {
    path: "/event",
    exact   : true,
    element : <Event />,
  }
  
]



export default function Navigation() {


  return (
    <Routes>
      {ourRoutes.map((route, index) => (
        <Route 
          key={index} 
          path={route.path} 
          element={route.element}
        />
      ))}
    </Routes>
  );
}
