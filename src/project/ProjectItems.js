

const ProjectItems=({projects})=>{

  return (projects.map((project)=>(
    
    <div className="mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-5">
      <div className="p-6">
      <div className="flex text-start mb-4">
      <div className="flex-shrink-0 mr-4">
       <img src={project.image} alt={project.name} className="w-20 h-20 bg-gray-200" />
      </div> 
      <div>
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{project.name}</h5>
      <p className="text-neutral-600 dark:text-neutral-200">{project.technologie}</p>
      </div>
      </div>
      <hr className="my-4" />
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{project.description}</p>
      <div className="flex justify-center gap-2 ">
        <button type="button"className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"> Code</button>
         <button type="button" className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"> Live</button>
      </div>
      </div>
    </div>
    )))
}

export default ProjectItems;