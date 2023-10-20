import Card  from './Card'

const Project=()=>{

return(
    <div className="flex items-center justify-center min-h-screen">
    <div className="text-center space-y-6 px-4 lg:px-0">
        <div className="text-3xl font-bold text-black">My project</div>
        <Card/>
    </div>
   </div>
    )
}

export default Project;