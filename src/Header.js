import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
}

export default Header;
