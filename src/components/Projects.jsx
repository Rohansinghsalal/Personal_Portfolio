import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaShoppingCart, 
  FaUsers, 
  FaUniversity, 
  FaServer, 
  FaTasks, 
  FaNetworkWired,
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaDesktop
} from 'react-icons/fa';
import BackgroundAnimation from './BackgroundAnimation';
import { useInView } from 'react-intersection-observer';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  // Create refs for each project to detect when they come into view
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout.",
      icon: <FaDesktop />,
      category: "web",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "AWS"],
      github: "https://github.com/rohansalal/ecommerce-platform",
      demo: "https://ecommerce-demo.rohansalal.com"
    },
    {
      id: 2,
      title: "Employee Management System",
      description: "A comprehensive system for managing employee data, attendance, and performance reviews.",
      icon: <FaDatabase />,
      category: "enterprise",
      technologies: ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL", "Docker"],
      github: "https://github.com/rohansalal/employee-management",
      demo: "https://ems-demo.rohansalal.com"
    },
    {
      id: 3,
      title: "Banking Application",
      description: "A secure banking application with account management, transactions, and financial reporting.",
      icon: <FaMobileAlt />,
      category: "mobile",
      technologies: ["Java", "Spring Security", "React Native", "MongoDB", "Jenkins"],
      github: "https://github.com/rohansalal/banking-app",
      demo: "https://banking-demo.rohansalal.com"
    },
    {
      id: 4,
      title: "RESTful API Service",
      description: "A high-performance RESTful API service with comprehensive documentation and testing.",
      icon: <FaServer />,
      category: "api",
      technologies: ["Java", "Spring Boot", "Swagger", "JUnit", "Postman"],
      github: "https://github.com/rohansalal/rest-api-service",
      demo: "https://api-docs.rohansalal.com"
    },
    {
      id: 5,
      title: "Task Management Dashboard",
      description: "An intuitive dashboard for managing tasks, projects, and team collaboration.",
      icon: <FaCode />,
      category: "web",
      technologies: ["Java", "Spring Boot", "React", "Redux", "Material UI"],
      github: "https://github.com/rohansalal/task-dashboard",
      demo: "https://tasks.rohansalal.com"
    },
    {
      id: 6,
      title: "Microservices Architecture",
      description: "A scalable microservices architecture with service discovery and API gateway.",
      icon: <FaCloud />,
      category: "backend",
      technologies: ["Java", "Spring Cloud", "Docker", "Kubernetes", "Prometheus"],
      github: "https://github.com/rohansalal/microservices-demo",
      demo: "https://microservices.rohansalal.com"
    }
  ];

  // Filter projects based on selected category
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const projectVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects section">
      <BackgroundAnimation variant="default" />
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Showcasing my expertise in Java Full Stack Development
          </motion.p>
        </div>
        
        <motion.div 
          className="filter-container"
          initial="hidden"
          animate="visible"
          variants={filterVariants}
        >
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`} 
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`} 
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`filter-btn ${filter === 'api' ? 'active' : ''}`} 
            onClick={() => setFilter('api')}
          >
            API
          </button>
          <button 
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`} 
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={`filter-btn ${filter === 'enterprise' ? 'active' : ''}`} 
            onClick={() => setFilter('enterprise')}
          >
            Enterprise
          </button>
        </motion.div>
        
        <motion.div 
          className="projects-container"
          ref={projectsRef}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="project-icon">
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <FaGithub /> Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn">
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 