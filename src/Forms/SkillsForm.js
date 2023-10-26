import  { useState } from 'react';

function SkillsForm() {
    const [formData, setFormData] = useState({
        category: '',
        skills: { file: '', technologie: '' }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        formDataObj.append('category', formData.category);
        formDataObj.append('file', formData.skills.file);
        formDataObj.append('technologie', formData.skills.technologie);

        const res = await fetch('http://localhost:5000/skills', {
            method: 'POST',
            body: formDataObj
        });
        const data = await res.json();
        console.log(data);
    };

    const handleInput = (e) => {
        if (e.target.name === 'file') {
            setFormData(prevState => ({
                ...prevState,
                skills: { ...prevState.skills, file: e.target.files[0] }
            }));
        } else if (e.target.name === 'category') {
            setFormData(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }));
        } else if (e.target.name === 'technologie') {
            setFormData(prevState => ({
                ...prevState,
                skills: { ...prevState.skills, technologie: e.target.value }
            }));
        }
    };

    return (
        <div className="max-w-lg lg:ms-auto mx-auto text-center">
            <div className="py-16 px-7 rounded-md bg-white">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        <div className="md:col-span-2">
                            <label htmlFor="category" className="float-left block font-normal text-gray-400 text-lg">category :</label>
                            <select id="category" name="category" onChange={handleInput} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700">
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="database">Database</option>
                                <option value="devOps">DevOps</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="file" className="float-left block font-normal text-gray-400 text-lg">technologie logo :</label>
                            <input type="file" id="file" name="file" onChange={handleInput} className="peer block w-full appearance-none border-none bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="technologie" className="float-left block font-normal text-gray-400 text-lg">technologie name:</label>
                            <input type="text" id="technologie" value={formData.skills.technologie} onChange={handleInput} name="technologie" placeholder="technologie name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" />
                        </div>
                        <div className="md:col-span-2">
                            <button className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300">Valider</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SkillsForm;
