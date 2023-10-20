import image from '../images/me.png'
const Landing =()=>{
   return (
    <div className="relative z-20 flex items-center">
    <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
        <div className="flex flex-col">
            <img src={image} className="mx-auto rounded-full w-30" alt="Person"/>
            <p className="my-6 text-3xl text-center dark:text-white">Hi, I'm Ibtissam Ech-Chaibi🤘</p>
            <h2 className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-4xl dark:text-white">Software Engineering Student && Web Development Enthusiast</h2>
            <div className="flex items-center justify-center mt-4">
                <button className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md">Let's discover more about me </button>
            </div>
        </div>
    </div>
</div>
    )

}
export default Landing;
