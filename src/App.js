import './App.css';
import Home from './home/Home';
import Footer from './home/Footer';
import Skills from './skills/Skills';
import Project from './project/Project';
import Contact from './Forms/Contact';
import SkillsForm from './Forms/SkillsForm';
import ProjectForm from './Forms/ProjectForm';

function App() {
    const skillsData = [
        {
            category: "Frontend",
            skills: [
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "../images/me.png'",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                // ... other frontend skills
            ]
        },
        {
            category: "Frontend",
            skills: [
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                // ... other frontend skills
            ]
        },
        {
            category: "Frontend",
            skills: [
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                // ... other frontend skills
            ]
        },
        {
            category: "Frontend",
            skills: [
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
                {
                    _id: "1",
                    image: "/path/to/image1.png",
                    name: "React"
                },
             
            ]
        },
    ];
    const projectsData = [
        {
          id: "1",
          image: "https://via.placeholder.com/150", // Placeholder image URL.
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
        },]

    return (
        <>
            <Home />
            <Skills skills={skillsData} />
            <SkillsForm/>
            <Project  projects={projectsData}/>
            <ProjectForm/>
            <Contact />

            <Footer />
        </>
    );
}

export default App;
