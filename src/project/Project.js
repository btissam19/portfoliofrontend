import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Project = ({ projects }) => {
    return (
        <div className="min-h-screen" id="projects">
            <div className="text-center space-y-6 px-4 lg:px-0">
                <div className="text-3xl font-bold text-black">
                    My project
                    <Link to="/register" 
                        className="ml-3 border border-indigo-500 bg-indigo-500 text-xs text-white rounded-md px-1 py-0.5 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                    >
                        add projects
                    </Link>
                </div>
            </div>
            <ProjectCard projects={projects} />
        </div>
    )
}

export default Project;
