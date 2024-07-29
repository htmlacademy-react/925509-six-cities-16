import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { PlaceType } from '../../types/types';

import PlaceCard from '../places/place-card';

type favoriteLocationsItemProps = {
  places: PlaceType[];
  currentCity: string;
};

function FavoritesLocationsItem(
  props: favoriteLocationsItemProps
): JSX.Element {
  const { places, currentCity } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          {/* TO DO - в дальнейшем тут добавить часть пути для фильтрации по городу */}
          <Link className="locations__item-link" to={AppRoute.Root}>
            <span>{currentCity}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
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
            isFavoriteCard
            isMainCard={false}
            isNearPlacesCard={false}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesLocationsItem;
