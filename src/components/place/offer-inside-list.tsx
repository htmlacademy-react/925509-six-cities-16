type OfferInsideListProps = {
  goods: string[];
};

function OfferInsideList(props: OfferInsideListProps): JSX.Element {
  const {goods} = props;
  return (
    <ul className="offer__inside-list">
      {goods.map((good) => (
        <li className="offer__inside-item" key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
}

export default OfferInsideList;
