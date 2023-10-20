import CardList from "./CardList";

const CardCustimize = ({ skills }) => {
    return skills.map((category) => (
        <div key={category.category} className="flex flex-col items-center gap-3 px-4 py-8 rounded-3xl bg-red-200 shadow-main">
            <h1 className="text-xl md:text-2xl text-dark-grey-900 font-extrabold mb-4">{category.category}</h1>
            <hr  />
            <CardList skills={category.skills} />
        </div>
    ));
}

export default CardCustimize;
