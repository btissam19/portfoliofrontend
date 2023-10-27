import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Project = ({ projects }) => {
    return (
        <div className="space-y-6  bg-red-50" id="projects">
            <div className="text-center px-4 lg:px-0">
                <div className="text-3xl font-bold text-black">
                    My project
                    <Link to="/register" type="submit" className="px-4 py-2 text-sm ml-2 text-gray-900 bg-transparent border-2 border-gray-800 dark:bg-white hover:bg-red-200 dark:text-white text-md">add project</Link>
                </div>
            </div>
            <ProjectCard projects={projects} />
        </div>
    )
}


export default Project;