import PlaceCard from './place-card';
import { PlaceType } from '../../types/types';

type PlaceListProps = {
  places: PlaceType[];
  isNearPlacesList: boolean;
  onListMouseEnter:(activePlaceId: string) => void;
};

function PlaceList(props: PlaceListProps): JSX.Element {
  const { places, isNearPlacesList, onListMouseEnter } = props;

  return (
    <div
      className={`${
        isNearPlacesList
          ? 'near-places__list'
          : 'cities__places-list tabs__content'
      } places__list`}
    >
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
          isNearPlacesCard={false}
          isMainCard
          onListMouseEnter={onListMouseEnter}
        />
      ))}
    </div>
  );
}

export default PlaceList;
