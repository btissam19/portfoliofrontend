const Card=()=>{
    return(   
        <div className="container flex flex-col mt-3 mx-auto p-8 rounded-lg shadow-lg bg-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto my-32">

                {/* Frontend Development Card */}
                <div className="flex flex-col items-center gap-3 px-4 py-8 bg-white rounded-3xl shadow-main">
                    <h1 className="text-xl md:text-2xl text-dark-grey-900 font-extrabold mb-4">Frontend Technologies</h1>
                    <ul className="text-dark-grey-600">
                        <li className="flex items-center gap-2">
                        <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            TailwindCSS
                        </li>
                        <li className="flex items-center gap-2">
                      <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            Bootstrap
                        </li>
                        <li className="flex items-center gap-2">
                      <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            React.js
                        </li>
                    </ul>
                </div>

                {/* Backend Development Card */}
                <div className="flex flex-col items-center gap-3 px-4 py-8 bg-white rounded-3xl shadow-main">
                    <h1 className="text-xl md:text-2xl text-dark-grey-900 font-extrabold mb-4">Backend Technologies</h1>
                    <ul className="text-dark-grey-600">
                        <li className="flex items-center gap-2">
                        <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            Node.js
                        </li>
                        <li className="flex items-center gap-2">
                       <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            Express.js
                        </li>
                        <li className="flex items-center gap-2">
                        <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            Django
                        </li>
                        <li className="flex items-center gap-2">
                        <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            Flask
                        </li>
                    </ul>
                </div>

                {/* Database Card */}
                <div className="flex flex-col items-center gap-3 px-4 py-8 bg-white rounded-3xl shadow-main">
                    <h1 className="text-xl md:text-2xl text-dark-grey-900 font-extrabold mb-4">Database</h1>
                    <ul className="text-dark-grey-600">
                        <li className="flex items-center gap-2">
                             <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            Mongodb 
                        </li>
                        <li className="flex items-center gap-2">
                             <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            Mysql
                        </li>
                        <li className="flex items-center gap-2">
                             <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            Postogar sql
                        </li>

                    </ul>
                </div>

                {/* DevOps Card */}
                <div className="flex flex-col items-center gap-3 px-4 py-8 bg-white rounded-3xl shadow-main">
                    <h1 className="text-xl md:text-2xl text-dark-grey-900 font-extrabold mb-4">DevOps</h1>
                    <ul className="text-dark-grey-600">
                        <li className="flex items-center gap-2">
                            <img src="/path/to/docker-logo.png" alt="Docker" className="h-6 w-6 rounded-full bg-gray-300" />
                            Docker
                        </li>
                        <li className="flex items-center gap-2">
                             <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            Kubernetes
                        </li>
                        <li className="flex items-center gap-2">
                             <img src="/path/to/tailwind-logo.png" alt="TailwindCSS" className="h-6 w-6 rounded-full bg-gray-300" />
                            Jenkins
                        </li>
                        <li className="flex items-center gap-2"></li>
                    </ul>
                </div>

            </div>
        </div>
 )
}

export default Card;