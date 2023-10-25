const CardListItems = ({ skills }) => {
    const serverUrl = "http://localhost:5000"; // Your server URL

    return skills.map((skill) => (
        <li key={skill._id} className="flex items-center gap-2">
            <img src={`${serverUrl}/${skill.file}`} alt={skill.technologie} className="h-6 w-6 rounded-full bg-gray-300" />
            <p className="text-sm"> {skill.technologie}</p> 
        </li>
    ));
}

export default CardListItems;
