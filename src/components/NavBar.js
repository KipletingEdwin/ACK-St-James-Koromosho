import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar"> 
    <div className="logo"> 
    <p> Koro</p>
    </div>
    <div className="nav-links"> 
    <NavLink  className= "navbar-links " to = "/home"> Home</NavLink>
    <NavLink className= "navbar-links " to = "/about"> About </NavLink>
    <NavLink className= "navbar-links " to = "/services"> Services </NavLink>
    <NavLink className= "navbar-links " to = "/downloads"> Downloads </NavLink>
    <NavLink className= "navbar-links " to = "/events">Events </NavLink>
    <NavLink className= "navbar-links " to = "/projects"> Projects </NavLink>
    <NavLink className= "navbar-links " to = "/offerings"> Offerings </NavLink>
    <NavLink className= "navbar-links " to = "/contact"> Contact </NavLink>
    </div>

    </div>
  
  );
}

export default NavBar;
