import Card from './Card';
import { Link } from 'react-router-dom';

const Skills = ({ skills }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full" id="skills">
            <div className="text-center space-y-6 px-4 lg:px-0 w-full">
                <div className="text-3xl font-bold text-black mr-3">
                    My Technical Skills
                    <Link to="/register" type="submit"
                        className="border border-indigo-500 bg-indigo-500 text-xs text-white rounded-md px-1 py-0.5 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                    >
                        add skills
                    </Link >
                </div>

                <Card skills={skills} />
            </div>
        </div>
    );
}

export default Skills;
