import Card from './Card';

const Skills = ({ skills }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="text-center space-y-6 px-4 lg:px-0 w-full">
            <div className="text-3xl font-bold text-black">My Technical Skills</div>
            <Card skills={skills} />
        </div>
    </div>
    );
}

export default Skills;
