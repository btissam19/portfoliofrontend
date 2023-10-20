import CardListItems from "./CardItems";

const CardList = ({ skills }) => {
  return (
    <ul className="text-dark-grey-600 text-start text-3xl">
      <CardListItems skills={skills} />
    </ul>
  );
}

export default CardList;
