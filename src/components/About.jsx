// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaFileDownload } from 'react-icons/fa';
import BackgroundAnimation from './BackgroundAnimation';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <BackgroundAnimation variant="alt" />
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Java Full Stack Developer with expertise in Spring Boot and React
          </motion.p>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm Rohan Singh Salal, a passionate Java Full Stack Developer with extensive experience 
              in building enterprise-grade applications using Java and related technologies. My core 
              expertise lies in developing robust backend systems with Spring Boot, Hibernate, and 
              creating responsive frontends with React.
            </p>
            <p>
              With a strong foundation in Java programming and object-oriented design principles, 
              I specialize in developing scalable microservices, RESTful APIs, and database 
              integrations. I'm proficient in working with various tools and technologies including 
              Spring MVC, JUnit, Docker, and CI/CD pipelines.
            </p>
            <p>
              I'm dedicated to writing clean, maintainable code and implementing best practices 
              in software development. My goal is to create efficient solutions that solve complex 
              business problems while ensuring optimal performance and security.
            </p>
            
            <div className="about-buttons">
              <a href="#contact" className="btn">Hire Me</a>
              <a 
                href="/files/resume.pdf" 
                className="btn btn-outline" 
                target="_blank" 
                rel="noopener noreferrer"
                download="Rohan_Salal_Resume.pdf"
              >
                <FaFileDownload style={{ marginRight: '8px' }} /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3>My Services</h3>
            
            <div className="services">
              <div className="service-item">
                <div className="service-icon">
                  <FaCode />
                </div>
                <h4>Java Backend Development</h4>
                <p>
                  I develop scalable and secure backend systems using Java, Spring Boot, 
                  Hibernate, and microservices architecture.
                </p>
              </div>
              
              <div className="service-item">
                <div className="service-icon">
                  <FaPalette />
                </div>
                <h4>Frontend Development</h4>
                <p>
                  I create responsive and interactive user interfaces using 
                  React, JavaScript, TypeScript, and modern CSS.
                </p>
              </div>
              
              <div className="service-item">
                <div className="service-icon">
                  <FaMobile />
                </div>
                <h4>Database & DevOps</h4>
                <p>
                  I design efficient database schemas and implement CI/CD pipelines 
                  using Docker, Jenkins, and AWS for seamless deployment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 