import Card from './Card';
import { Link } from 'react-router-dom';

const Skills = ({ skills }) => {
    return (
        <div className="flex flex-col items-center justify-center  w-full bg-red-50" id="skills">
            <div className="text-center px-4 lg:px-0 w-full">
                <div className="text-3xl font-bold text-black mr-3">
                    My Technical Skills
                    <Link to="/register" type="submit" className="px-4 py-2 text-sm ml-2 text-gray-900 bg-transparent border-2 border-gray-800 dark:bg-white hover:bg-red-200 dark:text-white text-md">add skills</Link>
                </div>
                <Card skills={skills} />
            </div>
        </div>
    );
}



export default Skills;
