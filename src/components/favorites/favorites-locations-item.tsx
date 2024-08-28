import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { PlaceType } from '../../types/types';
import { setCurrentCity } from '../../store/places-slice';
import { useAppDispatch } from '../../hooks/store-hooks';

import { PlaceCard } from '../places/index';

type favoriteLocationsItemProps = {
  places: PlaceType[];
  currentCity: string;
};

function FavoritesLocationsItem(
  props: favoriteLocationsItemProps
): JSX.Element {
  const { places, currentCity } = props;

  const dispatch = useAppDispatch();

  const handleCityClick = (): void => {
    dispatch(setCurrentCity(places[0].city));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            onClick={handleCityClick}
            to={AppRoute.Root}
          >
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
