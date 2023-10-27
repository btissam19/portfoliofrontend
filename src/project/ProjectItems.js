

const ProjectItems=({projects})=>{
  const serverUrl = "http://localhost:5000";
  return (projects.map((project)=>(
    
    <div className="mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-5">
      <div className=" p-6">
      <div className="flex text-start mb-4">
      <div className="flex-shrink-0 mr-4">
       <img src={`${serverUrl}/${project.file}`} alt={project.projectName} className="w-20 h-20 bg-gray-200" />
      </div> 
      <div>
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{project.projectName}</h5>
      <p className="text-neutral-600 dark:text-neutral-200">{project.projectTechnologie}</p>
      </div>
      </div>
      <hr className="my-4" />
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{project.projectDecription}</p>
      <div className="flex justify-center gap-2 ">
        <button type="button"className="px-4 py-2 text-sm m-2 text-gray-900 bg-transparent border-2 border-gray-800 dark:bg-white hover:bg-red-200 dark:text-white text-md"> Code</button>
         <button type="button" className="px-4 py-2 text-sm m-2 text-gray-900 bg-transparent border-2 border-gray-800 dark:bg-white hover:bg-red-200 dark:text-white text-md"> Live</button>
      </div>
      </div>
    </div>
    )))
}

export default ProjectItems;