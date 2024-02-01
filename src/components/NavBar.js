import React, { useState } from "react";
import closeIcon from '../assets/nav/closeIcon.png';
import menuIcon from '../assets/nav/menuIcon.png';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar"> 
      <a href="/" className="navbar-title">St. James Koromosho</a>
      <div className="nav-links"> 
        <img src={menuOpen ? closeIcon : menuIcon} alt="menu" onClick={() => setMenuOpen(!menuOpen)} />
        {menuOpen && (
          <ul className={`menu-list ${menuOpen ? 'open' : 'closed'}`} onClick={() => setMenuOpen(!menuOpen)}>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#ministries">MINISTRIES</a>
            </li>
            <li>
              <a href="#sermons">SERMONS</a>
            </li>
            <li>
              <a href="#events">EVENTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
