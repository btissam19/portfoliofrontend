import { useState } from 'react';

const ProjectForm = () => {
    const [project, setProject] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const projectFormData = new FormData();

        projectFormData.append('projectName', project.projectName);
        projectFormData.append('projectTechnologie', project.projectTechnologie);
        projectFormData.append('projectDecription', project.projectDecription);
        projectFormData.append('file', project.file);
        
        const res = await fetch('http://localhost:5000/projects', {
            method: 'POST',
            body: projectFormData
        });
        const data = await res.json();
        console.log(data);
    };

    const handleInput = (e) => {
        if (e.target.name === 'file') {
            setProject(prevState => ({ ...prevState, file: e.target.files[0] }));
        } else {
            setProject(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
        }
    };

    return (
        <div className="max-w-lg lg:ms-auto mx-auto text-center">
            <div className="py-16 px-7 rounded-md bg-white">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        <div className="md:col-span-2">
                            <label htmlFor="file" className="float-left block font-normal text-gray-400 text-lg">Technologie logo :</label>
                            <input type="file" id="file" name="file" onChange={handleInput} className="peer block w-full appearance-none border-none bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="md:col-span-2">
                            <input type="text" id="text" name="projectName" placeholder="project name" onChange={handleInput} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" />
                        </div>
                        <div className="md:col-span-2">
                            <input type="text" id="text" name="projectTechnologie" placeholder="project technologie" onChange={handleInput} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" />
                        </div>
                        <div className="md:col-span-2">
                            <textarea name="projectDecription" rows="5" cols="" placeholder="project description *" onChange={handleInput} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300">Valider</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;
