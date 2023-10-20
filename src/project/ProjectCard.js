import ProjectItems from "./ProjectItems";
const ProjectCard=({projects})=>{
 return (
    
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
<ProjectItems  projects={projects}/>
</div>
 )

}
export default ProjectCard;