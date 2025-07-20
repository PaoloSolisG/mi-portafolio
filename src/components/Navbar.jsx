import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contacto">Contáctame</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
