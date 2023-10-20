 
const Card=()=>{

 return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Added gap to space out cards */}
    <div className="mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-5"> {/* Added margin */}
        <div className="p-6">
            {/* Top Section: Image, Title, and Technologies */}
            <div className="flex text-start mb-4">
                {/* Square Image Placeholder */}
                <div className="flex-shrink-0 mr-4">
                    <img src="/path/to/your/image.png" alt="Project" className="w-20 h-20 bg-gray-200" />
                </div>
                
                {/* Project Title and Technologies */}
                <div>
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Project Name
                    </h5>
                    <p className="text-neutral-600 dark:text-neutral-200">
                        Technologies: React, Node.js, Express.js, MongoDB
                    </p>
                </div>
            </div>

            {/* Separator Line */}
            <hr className="my-4" />

            {/* Project Description */}
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                A brief description of the project. With supporting text below as a natural lead-in to additional content.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-2 ">
                <button
                    type="button"
                    className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                >
                    Code
                </button>
                <button
                    type="button"
                    className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                >
                    Live
                </button>
            </div>
        </div> 
    </div>

    {/* [Repeat for the second card] */}
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-5"> 
    <div className="p-6">
            {/* Top Section: Image, Title, and Technologies */}
            <div className="flex text-start mb-4">
                {/* Square Image Placeholder */}
                <div className="flex-shrink-0 mr-4">
                    <img src="/path/to/your/image.png" alt="Project" className="w-20 h-20 bg-gray-200" />
                </div>
                
                {/* Project Title and Technologies */}
                <div>
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Project Name
                    </h5>
                    <p className="text-neutral-600 dark:text-neutral-200">
                        Technologies: React, Node.js, Express.js, MongoDB
                    </p>
                </div>
            </div>

            {/* Separator Line */}
            <hr className="my-4" />

            {/* Project Description */}
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                A brief description of the project. With supporting text below as a natural lead-in to additional content.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-2 ">
                <button
                    type="button"
                    className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                >
                    Code
                </button>
                <button
                    type="button"
                    className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                >
                    Live
                </button>
            </div>
        </div> 
    </div>
</div>



    
    )

}
export default Card;