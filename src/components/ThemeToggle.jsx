import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <div className="theme-toggle-container">
      <motion.button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div 
          className="theme-toggle-track"
          initial={false}
          animate={{
            backgroundColor: isDarkMode ? "#3a3a3c" : "#f1f1f1"
          }}
        >
          <motion.div 
            className="theme-toggle-thumb"
            initial={false}
            animate={{
              x: isDarkMode ? "calc(100% - 2px)" : "2px",
              backgroundColor: isDarkMode ? "#8e8e93" : "#ffffff"
            }}
            transition={spring}
          >
            <motion.div 
              className="theme-toggle-icon"
              initial={false}
              animate={{
                rotate: isDarkMode ? 0 : 180
              }}
              transition={{ duration: 0.4 }}
            >
              {isDarkMode ? <FaMoon /> : <FaSun />}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ThemeToggle; 