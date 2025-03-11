import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../styles/BackgroundAnimation.css';

const BackgroundAnimation = ({ variant = 'default' }) => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const newParticles = [];
      const count = window.innerWidth < 768 ? 15 : 25;
      
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100, // random position (0-100%)
          y: Math.random() * 100,
          size: Math.random() * 10 + 5, // random size (5-15px)
          duration: Math.random() * 20 + 10, // random animation duration (10-30s)
          delay: Math.random() * 5
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    // Regenerate particles on window resize
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className={`background-animation ${variant}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          initial={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0
          }}
          animate={{
            left: [`${particle.x}%`, `${(particle.x + 20) % 100}%`, `${(particle.x - 10 + 100) % 100}%`, `${particle.x}%`],
            top: [`${particle.y}%`, `${(particle.y - 20 + 100) % 100}%`, `${(particle.y + 10) % 100}%`, `${particle.y}%`],
            opacity: [0, 0.3, 0.5, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation; 