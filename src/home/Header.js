const Header = () => {
    return (
        <header className="z-30 flex items-center w-full h-24 sm:h-32">
            <div className="container flex items-center justify-between px-6 mx-auto">
                <div className="flex items-center text-3xl font-black text-gray-800 uppercase dark:text-white">
                    {/* Consider importing SVG as a component for cleaner code */}
                    <svg width="25" height="25" viewBox="0 0 1792 1792" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1664 1504v-768q-32...[snipped for brevity]..." />
                    </svg>
                    <span className="mt-1 ml-3 text-xs">btissamchaibi1912@gmail.com</span>
                </div>
                <div className="flex items-center">
                    <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                        <a href="#home" className="flex px-6 py-2 hover:text-black">Home</a>
                        <a href="#skills" className="flex px-6 py-2 hover:text-black">Skills</a>
                        <a href="#projects" className="flex px-6 py-2 hover:text-black">Projects</a>
                        <a href="#resume" className="flex px-6 py-2 hover:text-black">Resume</a>
                        <a href="#contact" className="flex px-6 py-2 hover:text-black">Contact_Me</a>
                        
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
