import './App.css';
import Home from './home/Home';
import Footer from './home/Footer';
import Skills from './skills/Skills';
import Contact from './Forms/Contact'; 
import SkillsForm from './Forms/SkillsForm';
import ProjectForm from './Forms/ProjectForm';
import Project from './project/Project'
import ResumeDownloading from './Forms/Resume';
import RegisterForm from './Forms/RegisterForm';
import LoginForm from './Forms/LoginForm';
import { useEffect, useState } from 'react';

function App() {
    const [skills, setSkills] = useState([]);

    const fetchSkills = async () => {
        try {
            const response = await fetch('http://localhost:5000/skills', {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Failed to fetch skills');
            }

            const data = await response.json(); 
            setSkills(data); // Directly setting the array to the state
        } catch (error) {
            console.error("There was an error fetching the skills:", error);
        }
    }

    useEffect(() => {
        fetchSkills();
    }, []);


    const [project,setproject]=useState([]);

    const fetchProject= async ()=>{
        try {

            const response= await fetch('http://localhost:5000/projects',{
            method:'GET' 
        })
        if (!response.ok) {
            throw new Error('Failed to fetch skills');
        }

        const data = await response.json();
        setproject(data)

            
        } catch (error) {
            console.error("There was an error fetching the skills:", error);
        } 
    }
useEffect(()=>{fetchProject()},[])

    return (
        <>
            <Home />
            <RegisterForm/>
            <LoginForm/>
            <Skills skills={skills} />
            <SkillsForm />
            <Project projects={project} />
            <ProjectForm/>
            <ResumeDownloading/>
            <Contact />
            <Footer />
        </>
    );
}

export default App;
