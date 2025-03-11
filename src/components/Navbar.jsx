import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <h1>Rohan Singh Salal</h1>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link" onClick={() => setIsOpen(false)}>
              Education
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 