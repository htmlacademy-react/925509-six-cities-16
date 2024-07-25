import { PlaceType } from '../../types/types';
import FavoritesLocationsItem from './favorites-locations-item';

type FavoritesListProps = {
  places: PlaceType[];
};

function getFavoritePlaces(places: PlaceType[]) {
  return places.filter((place) => place.isFavorite);
}

// спасибо чату GPT за TS, разобраться в будушем
function groupPlacesByFavorite(places: PlaceType[]) {
  return Object.values(
    places.reduce((acc: Record<string, PlaceType[]>, place: PlaceType) => {
      if (!acc[place.city.name]) {
        acc[place.city.name] = [];
      }
      acc[place.city.name].push(place);
      return acc;
    }, {})
  );
}

function FavoritesList(props: FavoritesListProps): JSX.Element {
  const { places } = props;
  const favoritePlaces = getFavoritePlaces(places);
  const placesGroups = groupPlacesByFavorite(favoritePlaces);
  // console.log(placesGroups);

  return (
    <ul className="favorites__list">
      {placesGroups.map((placeGroupItem: PlaceType[]) => (
        <FavoritesLocationsItem
          key={crypto.randomUUID()}
          places={placeGroupItem}
        />
      ))}
    </ul>
  );
}

export default FavoritesList;
