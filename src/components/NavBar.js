import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar"> 
      <a href="/">St. James Koromosho</a>
    <div className="nav-links"> 
    <ul>
      <li>
        <a href="/">HOME</a>
      </li>

      <li>
        <a href="/">ABOUT</a>
      </li>

      <li>
        <a href="/">MINISTRIES</a>
      </li>

      <li>
        <a href="/">SERMONS</a>
      </li>

      <li>
        <a href="/">EVENTS</a>
      </li>

      <li>
        <a href="/">CONTACT</a>
      </li>
    </ul>
    </div>

    </div>
  
  );
}

export default NavBar;
