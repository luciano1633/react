// Navbar.jsx - Componente de navegación entre secciones

import React from 'react';
import './Navbar.css'; // Estilos para la navbar

const Navbar = ({ activeSection, onSectionChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Videojuegos "Game On"</h1>
      </div>
      <div className="navbar-links">
        <button
          className={`nav-link ${activeSection === 'products' ? 'active' : ''}`}
          onClick={() => onSectionChange('products')}
        >
          Productos
        </button>
        <button
          className={`nav-link ${activeSection === 'news' ? 'active' : ''}`}
          onClick={() => onSectionChange('news')}
        >
          Noticias
        </button>
        <button
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => onSectionChange('contact')}
        >
          Contacto
        </button>
      </div>
    </nav>
  );
};

export default Navbar;