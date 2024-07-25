import { PlaceType } from '../../types/types';

import PlaceCard from '../places/place-card';

type favoriteLocationsItemProps = {
  places: PlaceType[];
};

function FavoritesLocationsItem(
  props: favoriteLocationsItemProps
): JSX.Element {
  const { places } = props;
  const IS_FAVORITE_CARD = true;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          {/* TO DO - пока не понимаю, куда эта ссылка будет вести  */}
          <a className="locations__item-link" href="#">
            <span>{places[0].city.name}</span>
          </a>
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
            isFavoriteCard={IS_FAVORITE_CARD}
            isMainCard={false}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesLocationsItem;
