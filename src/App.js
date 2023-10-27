import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './home/Home';
import Footer from './home/Footer';
import Skills from './skills/Skills';
import Contact from './Forms/Contact';
import SkillsForm from './Forms/SkillsForm';
import ProjectForm from './Forms/ProjectForm';
import Project from './project/Project';
import ResumeDownloading from './Forms/Resume';
import RegisterForm from './Forms/RegisterForm';
import LoginForm from './Forms/LoginForm';
import ProtectForm from './Forms/ProtectForms';
import { useEffect, useState } from 'react';
import { useAuth } from './AuthContext'; 

function App() {
    const [skills, setSkills] = useState([]);
    const [project, setProject] = useState([]);

    const fetchSkills = async () => {
        try {
            const response = await fetch('http://localhost:5000/skills', {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Failed to fetch skills');
            }

            const data = await response.json();
            setSkills(data);
        } catch (error) {
            console.error("There was an error fetching the skills:", error);
        }
    }

    const fetchProject = async () => {
        try {
            const response = await fetch('http://localhost:5000/projects', {
                method: 'GET',
            });

            if (!response.ok) {
                throw  Error('Failed to fetch projects');
            }

            const data = await response.json();
            setProject(data);
        } catch (error) {
            console.error("There was an error fetching the projects:", error);
        }
    }

    useEffect(() => {
        fetchSkills();
    }, []);

    useEffect(() => {
        fetchProject();
    }, []);

    const { isAuthenticated } = useAuth();  // Fetch the authentication status

    function MainContent() {
        return (
            <>
                <Home />
                <Skills skills={skills} />
                <Project projects={project} />
                <Contact />
                <Footer />
            </>
        );
    }

    return (
        <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/login' element={<LoginForm />} />
            <Route 
                path='/forms' 
                element={isAuthenticated ? <ProtectForm/> : <Navigate to="/login" replace />} 
            />
             
        </Routes>
    );
}

export default App;
