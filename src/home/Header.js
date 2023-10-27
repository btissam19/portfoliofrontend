const Header = () => {
    return (
        
        <header className=" z-30 flex items-center w-full  sm:h-32 " >
            <div className="container flex items-center justify-between    ">
                <div className="flex items-center text-3xl font-black text-gray-800  dark:text-white">
                    <span className=" ml-3 text-xs">btissamchaibi1912@gmail.com</span>
                </div>
                <div className="flex items-center ">
                    <nav className="items-center hidden text-lg text-gray-800  dark:text-white lg:flex">
                        <a href="#home" className="flex px-6  hover:text-red-300">Home</a>
                        <a href="#skills" className="flex px-6  hover:text-red-300">Skills</a>
                        <a href="#projects" className="flex px-6  hover:text-red-300">Projects</a>
                        <a href="#resume" className="flex px-6  hover:text-red-300">Resume</a>
                        <a  href="#contact" className="px-4 py-2  text-gray-900  bg-transparent border-2 border-gray-800  dark:bg-white hover:bg-red-200 dark:text-white  text-md">Contact_Me</a>
                        
                    </nav>
                    <button className="flex flex-col ml-4 lg:hidden" aria-label="Menu">
                        <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                        <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                        <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
