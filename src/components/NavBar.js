import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar"> 
    <div className="logo"> 
    <p> Koro</p>
    <NavLink to = "/home"><h5> Home </h5></NavLink>
    <NavLink to = "/about"><h5> About </h5></NavLink>
    <NavLink to = "/services"><h5> Services </h5></NavLink>
    <NavLink to = "/downloads"><h5> Downloads </h5></NavLink>
    <NavLink to = "/events"><h5> Events </h5></NavLink>
    <NavLink to = "/projects"><h5> Projects </h5></NavLink>
    <NavLink to = "/offerings"><h5> Offerings </h5></NavLink>
    <NavLink to = "/contact"><h5> Contact </h5></NavLink>
</div>
    </div>
  
  );
}

export default NavBar;
