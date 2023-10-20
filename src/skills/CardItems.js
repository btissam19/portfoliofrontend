const CardListItems = ({ skills }) => {
    return skills.map((skill) => (
        <li key={skill._id} className="flex items-center gap-2">
            <img src={skill.image} alt={skill.name} className="h-6 w-6 rounded-full bg-gray-300" />
            {skill.name}
        </li>
    ));
}
export default CardListItems;
