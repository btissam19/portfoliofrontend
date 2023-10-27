const CardListItems = ({ skills }) => {
    const serverUrl = "http://localhost:5000";
    return skills.map((skill) => (
        <li key={skill._id} className="flex items-center gap-1">
            <img src={`${serverUrl}/${skill.file}`} alt={skill.technologie} className="h-6 w-6 rounded-full bg-gray-300" />
            <p className="text-sm"> {skill.technologie}</p> 
        </li>
    ));
}


export default CardListItems;
