import PlaceCard from './place-card';
import { PlaceType } from '../../types/types';

type PlaceListProps = {
  places: PlaceType[];
};

function PlaceList(props: PlaceListProps): JSX.Element {
  const { places } = props;
  const IS_MAIN_CARD = true;

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((placeItem: PlaceType) => (
        <PlaceCard
          price={placeItem.price}
          type={placeItem.type}
          title={placeItem.title}
          rating={placeItem.rating}
          previewImage={placeItem.previewImage}
          isPremium={placeItem.isPremium}
          isFavorite={placeItem.isFavorite}
          id={placeItem.id}
          city={placeItem.city}
          location={placeItem.location}
          key={placeItem.id}
          isFavoriteCard={false}
          isMainCard={IS_MAIN_CARD}
        />
      ))}
    </div>
  );
}

export default PlaceList;
