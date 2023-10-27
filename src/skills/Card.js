import CardCustimize from "./CardCustimize";

const Card = ({ skills }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8 mx-8">
            <CardCustimize skills={skills} />
        </div>
    );
}


export default Card;
