import { useState } from "react";
const ResumeDownloading= ()=>{
    const [Resume, setResume] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const ResumeDataObj = new FormData();
        ResumeDataObj.append('file', Resume.file);
    

        const res = await fetch('http://localhost:5000/resume', {
            method: 'POST',
            body:  ResumeDataObj
        });
        const data = await res.json();
        console.log(data);
    };

    const handleInput = (e) => {
            setResume(prevState => ({
                ...prevState,
                skills: { ...prevState, file: e.target.files[0] }
            }));
    
    };

    return (
        <div className="max-w-lg lg:ms-auto mx-auto text-center" id="resume">
            <div className="py-16 px-7 rounded-md bg-white">
                <form  encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        <div className="md:col-span-2">
                            <label htmlFor="file" className="float-left block font-normal text-gray-400 text-lg">upload resums :</label>
                            <input type="file" id="file" name="file"  value={Resume.file} onChange={handleInput} className="peer block w-full appearance-none border-none bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300">Valider</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

    
}

export default ResumeDownloading;