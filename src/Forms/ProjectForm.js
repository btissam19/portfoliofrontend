const ProjectForm=()=>{


    return(
        
        
        <div className="max-w-lg lg:ms-auto mx-auto text-center">
            <div className="py-16 px-7 rounded-md bg-white">
                <form action="" method="POST">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="md:col-span-2">
                            <label htmlFor="file" className="float-left block font-normal text-gray-400 text-lg">technologie logo :</label>
                            <input type="file" id="file" name="file" className="peer block w-full appearance-none border-none bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
                        </div>
                        
                        <div className="md:col-span-2">
                            <input type="email" id="email" name="email" placeholder="project name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" />
                        </div>
                        <div className="md:col-span-2">
                            <input type="email" id="email" name="email" placeholder="project technologie" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" />
                        </div>
                        <div class="md:col-span-2">
                                 <textarea name="message" rows="5" cols="" placeholder="project description *" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <button className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300">Valider</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
         )
}

export default ProjectForm;