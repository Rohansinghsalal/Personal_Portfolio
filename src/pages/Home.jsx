import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
};

export default Home; 