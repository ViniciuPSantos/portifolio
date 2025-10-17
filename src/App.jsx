import './styles/global.css';
import  Home  from './pages/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  AboutPage  from './pages/AboutPage';
import  ContactPage  from './pages/ContactPage';
import  ProjectPage from './pages/ProjectsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects" element={<ProjectPage />} />
            </Routes>
        </Router>

        
    )
}

export default App;