import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaJava, 
  FaReact, 
  FaDatabase, 
  FaCloud, 
  FaServer, 
  FaCode, 
  FaDocker,
  FaGitAlt,
  FaAws
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiMysql, 
  SiMongodb, 
  SiPostgresql, 
  SiJavascript,
  SiTypescript,
  SiHibernate,
  SiJenkins,
  SiKubernetes,
  SiRedis
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' }
  ];

  const skills = [
    { 
      name: 'Java', 
      level: 95, 
      icon: <FaJava />, 
      category: 'backend',
      color: '#f89820'
    },
    { 
      name: 'Spring Boot', 
      level: 90, 
      icon: <SiSpringboot />, 
      category: 'backend',
      color: '#6db33f'
    },
    { 
      name: 'React', 
      level: 85, 
      icon: <FaReact />, 
      category: 'frontend',
      color: '#61dafb'
    },
    { 
      name: 'JavaScript', 
      level: 85, 
      icon: <SiJavascript />, 
      category: 'frontend',
      color: '#f7df1e'
    },
    { 
      name: 'TypeScript', 
      level: 80, 
      icon: <SiTypescript />, 
      category: 'frontend',
      color: '#3178c6'
    },
    { 
      name: 'MySQL', 
      level: 85, 
      icon: <SiMysql />, 
      category: 'database',
      color: '#4479a1'
    },
    { 
      name: 'MongoDB', 
      level: 80, 
      icon: <SiMongodb />, 
      category: 'database',
      color: '#47a248'
    },
    { 
      name: 'PostgreSQL', 
      level: 75, 
      icon: <SiPostgresql />, 
      category: 'database',
      color: '#336791'
    },
    { 
      name: 'Hibernate', 
      level: 85, 
      icon: <SiHibernate />, 
      category: 'backend',
      color: '#bcae79'
    },
    { 
      name: 'RESTful APIs', 
      level: 90, 
      icon: <FaServer />, 
      category: 'backend',
      color: '#ff5733'
    },
    { 
      name: 'Microservices', 
      level: 85, 
      icon: <FaCloud />, 
      category: 'backend',
      color: '#1e88e5'
    },
    { 
      name: 'Docker', 
      level: 80, 
      icon: <FaDocker />, 
      category: 'devops',
      color: '#2496ed'
    },
    { 
      name: 'Git', 
      level: 90, 
      icon: <FaGitAlt />, 
      category: 'devops',
      color: '#f05032'
    },
    { 
      name: 'AWS', 
      level: 75, 
      icon: <FaAws />, 
      category: 'devops',
      color: '#ff9900'
    },
    { 
      name: 'Jenkins', 
      level: 70, 
      icon: <SiJenkins />, 
      category: 'devops',
      color: '#d33833'
    },
    { 
      name: 'Kubernetes', 
      level: 65, 
      icon: <SiKubernetes />, 
      category: 'devops',
      color: '#326ce5'
    },
    { 
      name: 'Redis', 
      level: 75, 
      icon: <SiRedis />, 
      category: 'database',
      color: '#dc382d'
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut'
      }
    })
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10
      }
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Expertise in Java Full Stack Development
          </motion.p>
        </div>

        <motion.div 
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="skills-container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item"
              variants={skillVariants}
            >
              <div className="skill-info">
                <motion.div 
                  className="skill-icon"
                  style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {skill.icon}
                </motion.div>
                <div>
                  <h3>{skill.name}</h3>
                  <div className="skill-level">
                    <motion.div 
                      className="skill-progress"
                      custom={skill.level}
                      variants={progressVariants}
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </div>
                <div className="skill-percentage">{skill.level}%</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="summary-card">
            <div className="summary-icon">
              <FaCode />
            </div>
            <h3>1+ Years</h3>
            <p>Experience Development</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <FaServer />
            </div>
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <FaDatabase />
            </div>
            <h3>10+</h3>
            <p>Technologies Mastered</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 