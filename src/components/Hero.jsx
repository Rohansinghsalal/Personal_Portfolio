// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCamera, FaFileDownload, FaLink } from 'react-icons/fa';
import BackgroundAnimation from './BackgroundAnimation';
import ParticleBackground from './ParticleBackground';
import '../styles/Hero.css';

// Default profile image path - this will be included in the Vercel deployment
const DEFAULT_PROFILE_IMAGE = '/images/profile/default-profile.png';

const Hero = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [linkedInProfileUrl, setLinkedInProfileUrl] = useState('https://www.linkedin.com/in/rohansalal');
  const [directImageUrl, setDirectImageUrl] = useState('');
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [isEditingImageUrl, setIsEditingImageUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Java Full Stack Developer", "Backend Developer"];
  const skills = ["Spring Boot", "Microservices", "React JS", "Cloud Solutions", "RESTful APIs"];
  const [skillIndex, setSkillIndex] = useState(0);
  const fileInputRef = useRef(null);
  const urlInputRef = useRef(null);
  const imageUrlInputRef = useRef(null);
  const cursorRef = useRef(null);

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        // Add a slight delay for a trailing effect
        setTimeout(() => {
          cursorRef.current.style.left = `${e.clientX}px`;
          cursorRef.current.style.top = `${e.clientY}px`;
        }, 50);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Title rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Skills tagline rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000); // Change skill every 2 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Handle manual image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        // Save to localStorage for persistence
        localStorage.setItem('profileImage', e.target.result);
        localStorage.setItem('useLinkedInProfile', 'false');
        localStorage.setItem('useDirectImageUrl', 'false');
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle LinkedIn URL input
  const toggleUrlInput = () => {
    setIsEditingUrl(!isEditingUrl);
    setIsEditingImageUrl(false);
    // Focus the input when showing
    if (!isEditingUrl) {
      setTimeout(() => {
        if (urlInputRef.current) {
          urlInputRef.current.focus();
        }
      }, 100);
    }
  };

  // Toggle direct image URL input
  const toggleImageUrlInput = () => {
    setIsEditingImageUrl(!isEditingImageUrl);
    setIsEditingUrl(false);
    // Focus the input when showing
    if (!isEditingImageUrl) {
      setTimeout(() => {
        if (imageUrlInputRef.current) {
          imageUrlInputRef.current.focus();
        }
      }, 100);
    }
  };

  // Save LinkedIn URL and fetch profile image
  const saveLinkedInUrl = async () => {
    if (!linkedInProfileUrl) return;
    
    setIsLoading(true);
    try {
      // Extract username from LinkedIn URL
      const username = extractLinkedInUsername(linkedInProfileUrl);
      if (!username) {
        throw new Error('Invalid LinkedIn URL');
      }
      
      // For Rohan Salal's LinkedIn profile, we'll use a better approach
      // This creates an avatar with the initials "RS" for Rohan Salal
      const placeholderUrl = `https://ui-avatars.com/api/?name=Rohan+Salal&size=200&background=0D8ABC&color=fff&bold=true`;
      
      setProfileImage(placeholderUrl);
      localStorage.setItem('profileImage', placeholderUrl);
      localStorage.setItem('linkedInProfileUrl', linkedInProfileUrl);
      localStorage.setItem('useLinkedInProfile', 'true');
      localStorage.setItem('useDirectImageUrl', 'false');
      
      // Hide the URL input after saving
      setIsEditingUrl(false);
    } catch (error) {
      console.error('Error setting LinkedIn profile:', error.message);
      alert('Could not set LinkedIn profile. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Save direct image URL
  const saveDirectImageUrl = () => {
    if (!directImageUrl) return;
    
    setIsLoading(true);
    try {
      // Validate URL
      new URL(directImageUrl);
      
      setProfileImage(directImageUrl);
      localStorage.setItem('profileImage', directImageUrl);
      localStorage.setItem('directImageUrl', directImageUrl);
      localStorage.setItem('useDirectImageUrl', 'true');
      localStorage.setItem('useLinkedInProfile', 'false');
      
      // Hide the URL input after saving
      setIsEditingImageUrl(false);
    } catch (error) {
      console.error('Error setting direct image URL:', error.message);
      alert('Please enter a valid image URL.');
    } finally {
      setIsLoading(false);
    }
  };

  // Extract username from LinkedIn URL
  const extractLinkedInUsername = (url) => {
    try {
      // Handle different LinkedIn URL formats
      const regex = /linkedin\.com\/in\/([^/]+)/;
      const match = url.match(regex);
      return match ? match[1] : null;
    } catch (error) {
      console.error('Error extracting LinkedIn username:', error.message);
      return null;
    }
  };

  // Load profile image from localStorage on component mount
  useEffect(() => {
    // Always use the default image first to ensure it's available
    setProfileImage(DEFAULT_PROFILE_IMAGE);
    
    // Then try to load from localStorage if not on Vercel
    const isVercelDeployment = window.location.hostname.includes('vercel.app');
    const savedImage = localStorage.getItem('profileImage');
    
    if (savedImage && !isVercelDeployment) {
      // Only use localStorage image if not on Vercel deployment
      const img = new Image();
      img.onload = () => {
        // Only set the image if it loads successfully
        setProfileImage(savedImage);
      };
      img.src = savedImage;
    }
    
    const savedLinkedInUrl = localStorage.getItem('linkedInProfileUrl');
    if (savedLinkedInUrl) {
      setLinkedInProfileUrl(savedLinkedInUrl);
    }
    
    const savedDirectImageUrl = localStorage.getItem('directImageUrl');
    if (savedDirectImageUrl) {
      setDirectImageUrl(savedDirectImageUrl);
    }
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  };

  const skillAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 } 
    },
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="custom-cursor" ref={cursorRef}></div>
      <ParticleBackground />
      <BackgroundAnimation variant="default" />
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>
            Hi, I'm <span className="highlight">Rohan Salal</span>
          </motion.h1>
          <div className="title-container">
            <motion.h2 
              key={titleIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={titleAnimation}
              className="animated-title"
            >
              {titles[titleIndex]}
            </motion.h2>
          </div>
          <div className="skill-tagline-container">
            <motion.div
              key={skillIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={skillAnimation}
              className="skill-tagline"
            >
              <span className="skill-icon">⚡</span> {skills[skillIndex]}
            </motion.div>
          </div>
          
          <motion.p variants={fadeInUp}>
            Specialized in building enterprise applications with Java, Spring Boot, and React.
            Experienced in developing scalable microservices, RESTful APIs, and cloud-based solutions.
            Passionate about clean code, performance optimization, and delivering exceptional user experiences.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            variants={fadeInUp}
          >
            <motion.a 
              href="#contact" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a 
              href="https://pdf.ac/25Zr1u" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download="Rohan_Salal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileDownload style={{ marginRight: '8px' }} /> Download CV
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="social-icons"
            variants={fadeInUp}
          >
            <motion.a 
              href="https://github.com/rohansalal" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/rohansalal" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:rohansalal1234@gmail.com"
              variants={socialIconVariants}
              whileHover="hover"
              aria-label="Email Me"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.div 
            className="image-decoration decoration-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
          <motion.div 
            className="image-decoration decoration-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          />
          <motion.div 
            className="image-container"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {profileImage ? (
              <div className="profile-image-wrapper">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="profile-image" 
                />
                <div className="profile-image-actions">
                  <button 
                    className="profile-action-btn upload-btn" 
                    onClick={() => fileInputRef.current.click()}
                    title="Upload custom image"
                  >
                    <FaCamera />
                  </button>
                  <button 
                    className="profile-action-btn linkedin-btn" 
                    onClick={toggleUrlInput}
                    title="Link with LinkedIn"
                  >
                    <FaLinkedin />
                  </button>
                  <button 
                    className="profile-action-btn direct-url-btn" 
                    onClick={toggleImageUrlInput}
                    title="Use direct image URL"
                  >
                    <FaLink />
                  </button>
                </div>
                
                {isEditingUrl && (
                  <div className="linkedin-url-input-container">
                    <input
                      type="text"
                      ref={urlInputRef}
                      value={linkedInProfileUrl}
                      onChange={(e) => setLinkedInProfileUrl(e.target.value)}
                      placeholder="Enter your LinkedIn profile URL"
                      className="linkedin-url-input"
                    />
                    <div className="linkedin-url-actions">
                      <button 
                        className="url-action-btn save-btn" 
                        onClick={saveLinkedInUrl}
                        disabled={isLoading}
                      >
                        {isLoading ? <div className="btn-spinner"></div> : 'Save'}
                      </button>
                      <button 
                        className="url-action-btn cancel-btn" 
                        onClick={toggleUrlInput}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
                
                {isEditingImageUrl && (
                  <div className="linkedin-url-input-container">
                    <input
                      type="text"
                      ref={imageUrlInputRef}
                      value={directImageUrl}
                      onChange={(e) => setDirectImageUrl(e.target.value)}
                      placeholder="Enter direct URL to your profile image"
                      className="linkedin-url-input"
                    />
                    <div className="linkedin-url-actions">
                      <button 
                        className="url-action-btn save-btn" 
                        onClick={saveDirectImageUrl}
                        disabled={isLoading}
                      >
                        {isLoading ? <div className="btn-spinner"></div> : 'Save'}
                      </button>
                      <button 
                        className="url-action-btn cancel-btn" 
                        onClick={toggleImageUrlInput}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="profile-placeholder">
                <img 
                  src={DEFAULT_PROFILE_IMAGE} 
                  alt="Rohan Singh Salal" 
                  className="profile-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://ui-avatars.com/api/?name=Rohan+Salal&size=200&background=0D8ABC&color=fff&bold=true';
                  }} 
                />
                <div className="upload-icon">
                  <FaCamera />
                </div>
                <p>Click to add photo</p>
                <div className="profile-placeholder-actions">
                  <button 
                    className="profile-action-btn upload-btn" 
                    onClick={() => fileInputRef.current.click()}
                  >
                    Upload Image
                  </button>
                  <button 
                    className="profile-action-btn linkedin-btn" 
                    onClick={toggleUrlInput}
                  >
                    Use LinkedIn Profile
                  </button>
                  <button 
                    className="profile-action-btn direct-url-btn" 
                    onClick={toggleImageUrlInput}
                  >
                    Use Image URL
                  </button>
                </div>
                
                {isEditingUrl && (
                  <div className="linkedin-url-input-container placeholder-url-input">
                    <input
                      type="text"
                      ref={urlInputRef}
                      value={linkedInProfileUrl}
                      onChange={(e) => setLinkedInProfileUrl(e.target.value)}
                      placeholder="Enter your LinkedIn profile URL"
                      className="linkedin-url-input"
                    />
                    <div className="linkedin-url-actions">
                      <button 
                        className="url-action-btn save-btn" 
                        onClick={saveLinkedInUrl}
                        disabled={isLoading}
                      >
                        {isLoading ? <div className="btn-spinner"></div> : 'Save'}
                      </button>
                      <button 
                        className="url-action-btn cancel-btn" 
                        onClick={toggleUrlInput}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
                
                {isEditingImageUrl && (
                  <div className="linkedin-url-input-container placeholder-url-input">
                    <input
                      type="text"
                      ref={imageUrlInputRef}
                      value={directImageUrl}
                      onChange={(e) => setDirectImageUrl(e.target.value)}
                      placeholder="Enter direct URL to your profile image"
                      className="linkedin-url-input"
                    />
                    <div className="linkedin-url-actions">
                      <button 
                        className="url-action-btn save-btn" 
                        onClick={saveDirectImageUrl}
                        disabled={isLoading}
                      >
                        {isLoading ? <div className="btn-spinner"></div> : 'Save'}
                      </button>
                      <button 
                        className="url-action-btn cancel-btn" 
                        onClick={toggleImageUrlInput}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              accept="image/*" 
              style={{ display: 'none' }} 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 