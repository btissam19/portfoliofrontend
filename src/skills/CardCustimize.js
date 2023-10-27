import CardList from "./CardList";
const CardCustimize = ({ skills }) => {
    return skills.map((category) => (
        <div key={category.category} className="flex flex-col items-center gap-2 px-4 py-6  shadow-main mr-4  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-5">
            <h1 className="text-xl md:text-2xl text-dark-grey-900 font-extrabold mb-3">{category.category}</h1>
            <CardList skills={category.skills} /> 
        </div>
    ));
}


export default CardCustimize;
