import './App.css';
import Home from './home/Home';
import Footer from './home/Footer';
import Skills from './skills/Skills';
import Contact from './Forms/Contact'; 
import SkillsForm from './Forms/SkillsForm';
import ProjectForm from './Forms/ProjectForm';
import Project from './project/Project'
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

    const projectsData = [
        {
          id: "1",
          image: "https://via.placeholder.com/150",
          name: "Project A",
          technologie: "React, TailwindCSS",
          description: "This is a description for Project A. It showcases capabilities using React and TailwindCSS."
        },
        {
          id: "2",
          image: "https://via.placeholder.com/150",
          name: "Project B",
          technologie: "Node.js, Express",
          description: "Project B is developed using Node.js and Express. It's a backend service that provides various APIs."
        }
    ];

    return (
        <>
            <Home />
            <Skills skills={skills} />
            <SkillsForm />
            <Project projects={projectsData} />
            <ProjectForm/>
            <Contact />
            <Footer />
        </>
    );
}

export default App;
