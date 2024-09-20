import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="Header">
        <div className="Image">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="Button-Section">
          <a href="#cards">
            <img src="down.png" alt="Ir para Seção" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
