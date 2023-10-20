import CardCustimize from "./CardCustimize";

const Card = ({ skills }) => {
    return (
        <div className=" flex flex-col  rounded-lg shadow-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-32 mx-32  ">
                <CardCustimize skills={skills} />
            </div>
        </div>
    );
}

export default Card;
