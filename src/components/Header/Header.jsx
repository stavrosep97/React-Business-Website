// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <a href="https://maps.app.goo.gl/jFHQRJzxALmYKF1Q7" target='_blank' rel="noopener noreferrer">
              <span> 📍 Neofytou Georgiou 3, Paphos 8020</span>
            </a>
          </div>
          <div className="top-bar-right">
            <a href="tel:+35726948181">📞 +357 26948181</a>
            <a href="mailto:elenamixail77@icloud.com">✉️ info@modernhome.com</a>
          </div>
        </div>
      </div>

      {/* Κυρίως Header */}
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img className="logoimg" src="/images/logo.webp" alt="Modern Home Logo" />
            </Link>
          </div>

          {/* Κουμπί hamburger - φαίνεται μόνο σε mobile (μέσω CSS) */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <nav className={isMenuOpen ? 'nav-open' : ''}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
              <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
              <li><Link to="/about" onClick={closeMenu}>AboutUs</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}