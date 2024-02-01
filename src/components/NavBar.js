import React from "react";

function NavBar() {
  return (
    <div className="navbar"> 
      <a href="/" className="navbar-title">St. James Koromosho</a>
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
