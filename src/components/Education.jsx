// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';
import BackgroundAnimation from './BackgroundAnimation';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: 'Graphic Era Hill University',
      degree: 'Bachelor of Technology in Computer Science',
      period: 'Nov. 2021 – May 2024',
      location: 'Nainital, Uttarakhand',
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      institution: 'Government Polytechnic Nainital',
      degree: 'Diploma in Information Technology',
      period: 'Aug 2018 – Oct 2021',
      location: 'Nainital, Uttarakhand',
      icon: <FaGraduationCap />
    },
    {
      id: 3,
      institution: 'Sacred Heart Sr. Sec School',
      degree: 'Class 10th',
      period: 'Mar 2017 – Jul 2018',
      location: 'Haldwani, Uttarakhand',
      icon: <FaSchool />
    }
  ];

  const courseWork = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Web Development",
    "Software Engineering",
    "Computer Networks"
  ];

  return (
    <section id="education" className="education-section section">
      <BackgroundAnimation variant="alt" />
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My academic journey and qualifications
          </motion.p>
        </div>

        <div className="education-timeline">
          {educationData.map((item) => (
            <motion.div 
              className="education-item"
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * item.id, duration: 0.5 }}
            >
              <div className="education-icon">
                {item.icon}
              </div>
              <div className="education-content">
                <h3>{item.institution}</h3>
                <h4>{item.degree}</h4>
                <div className="education-details">
                  <span className="education-period">{item.period}</span>
                  <span className="education-location">{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="coursework-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3><FaBook /> Relevant Coursework</h3>
          <div className="coursework-grid">
            {courseWork.map((course, index) => (
              <motion.div 
                className="course-item"
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.6, duration: 0.4 }}
              >
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 