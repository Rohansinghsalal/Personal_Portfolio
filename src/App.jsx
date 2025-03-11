import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <ThemeToggle />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
