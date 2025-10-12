import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Header.css';
import logo from '../img/logo.png';

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo-box">
          <NavLink to="/" end>
              <img id="home-logo" src={logo} alt="not found" style={{ cursor: "pointer" }}></img>
          </NavLink>
        </div>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
}

export default Header;
