import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar"> 
    <div className="logo"> 
    <p> Koro</p>
    <NavLink to = "/home"> Home</NavLink>
    <NavLink to = "/about"> About </NavLink>
    <NavLink to = "/services"> Services </NavLink>
    <NavLink to = "/downloads"> Downloads </NavLink>
    <NavLink to = "/events">Events </NavLink>
    <NavLink to = "/projects"> Projects </NavLink>
    <NavLink to = "/offerings"> Offerings </NavLink>
    <NavLink to = "/contact"> Contact </NavLink>
</div>
    </div>
  
  );
}

export default NavBar;
