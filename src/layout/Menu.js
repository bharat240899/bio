import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="common navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mr-auto primary-gradient">Bharath Kumar Velugu</Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Use ms-auto class to push items to the end */}
            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link to="/about" className="nav-link primary-gradient" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
              <Link to="/services" className="nav-link primary-gradient" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
              <Link to="/contact" className="nav-link primary-gradient" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
