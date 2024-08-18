import { PlaceType } from '../../types/types';
import FavoritesLocationsItem from './favorites-locations-item';

type FavoritesListProps = {
  places: PlaceType[];
};

function getFavoritePlaces(places: PlaceType[]) {
  return places.filter((place) => place.isFavorite);
}

function groupPlacesByFavorite(places: PlaceType[]) {
  return places.reduce((accumulator: Record<string, PlaceType[]>, place: PlaceType) => {
    if (!accumulator[place.city.name]) {
      accumulator[place.city.name] = [];
    }
    accumulator[place.city.name].push(place);
    return accumulator;
  }, {});
}

function FavoritesList(props: FavoritesListProps): JSX.Element {
  const { places } = props;
  const favoritePlaces = getFavoritePlaces(places);
  const placesGroups = groupPlacesByFavorite(favoritePlaces);

  return (
    <ul className="favorites__list">
      {Object.keys(placesGroups).map((placeGroupItem: string) => (
        <FavoritesLocationsItem
          key={crypto.randomUUID()}
          places={placesGroups[placeGroupItem]}
          currentCity={placeGroupItem}
        />
      ))}
    </ul>
  );
}

export default FavoritesList;
