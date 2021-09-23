import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo"></div>
      <div>
        <ul>
          <li>
            <a href="about">THE IMAX DIFFERENCE</a>
          </li>
          <li>
            <a href="movies">MOVIES</a>
          </li>
        </ul>
        <div className="bars_container">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
