import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Rohan Singh Salal</h2>
            <p>Java Full Stack Developer</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:rohansalal1234@gmail.com" title="Email Me">
                <FaEnvelope />
              </a>
            </div>
            <p className="email-contact">rohansalal1234@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Rohan Singh Salal. All Rights Reserved.
          </p>
          <p>
            Made with <FaHeart className="heart-icon" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 