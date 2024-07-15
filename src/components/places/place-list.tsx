import PlaceCard from './place-card';
import { PlaceType } from '../../types/types';

type PlaceListProps = {
  places: PlaceType[];
};

function PlaceList(props: PlaceListProps): JSX.Element {
  const { places } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((placeItem: PlaceType) => (
        <PlaceCard
          price={placeItem.price}
          type={placeItem.type}
          description={placeItem.description}
          link={placeItem.link}
          rating={placeItem.rating}
          imgSrc={placeItem.imgSrc}
          isPremium={placeItem.isPremium}
          isInFavorite={placeItem.isInFavorite}
          title={placeItem.title}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  );
}

export default PlaceList;
