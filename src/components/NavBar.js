import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar"> 
    <div className="logo"> 
    <p> Koro</p>
    <NavLink to = "/home"><h5> Home </h5></NavLink>
    <NavLink to = "/about"><h5> Home </h5></NavLink>
    <NavLink to = "/services"><h5> Home </h5></NavLink>
    <NavLink to = "/home"><h5> Home </h5></NavLink>
    <NavLink to = "/home"><h5> Home </h5></NavLink>
    <NavLink to = "/home"><h5> Home </h5></NavLink>
    <NavLink to = "/home"><h5> Home </h5></NavLink>
    <NavLink to = "/home"><h5> Home </h5></NavLink>
</div>
    </div>
  
  );
}

export default NavBar;
