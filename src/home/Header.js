const   Header=()=>{
return (
    <header className="z-30 flex items-center w-full h-24 sm:h-32">
    <div className="container flex items-center justify-between px-6 mx-auto">
        <div className="flex items-center text-3xl font-black text-gray-800 uppercase dark:text-white">
            <svg width="25" height="25" viewBox="0 0 1792 1792" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M1664 1504v-768q-32...[snipped for brevity]..." />
            </svg>
            <span className="mt-1 ml-3 text-xs">btissamchaibi1912@gmail.com</span>
        </div>
        <div className="flex items-center">
            <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                <button className="flex px-6 py-2 hover:text-black">Home</button>
                <button className="flex px-6 py-2 hover:text-black">Skills</button>
                <button className="flex px-6 py-2 hover:text-black">Projects</button>
                <button className="flex px-6 py-2 hover:text-black">Contact Me</button>
            </nav>
            <button className="flex flex-col ml-4 lg:hidden">
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            </button>
        </div>
    </div>
</header>)

}
export default Header;