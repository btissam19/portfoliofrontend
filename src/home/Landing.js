import image from '../images/me.png'
const Landing =()=>{
   return (
    <div className="relative z-20 flex items-center">
    <div className="container relative flex flex-col items-center justify-between px-6  mx-auto">
        <div className="flex flex-col mt-0">
            <img src={image} className="mx-auto rounded-full w-[18rem] " alt="Person"/>
            <p className="my-6 text-3xl text-center dark:text-white">Hi, I'm Ibtissam Ech-Chaibi🤘</p>
            <h2 className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-4xl dark:text-white"> Junior Software Engineering  </h2>
            <div className="flex items-center justify-center mt-0">
                <a href='#skills' className="px-4 py-2  text-gray-900  bg-transparent border-2 border-gray-800 md:mt-16  dark:bg-white hover:bg-red-200 dark:text-white  text-md">Let's discover more about me </a>
            </div>
        </div>
    </div>
</div>
    )

}
export default Landing;
