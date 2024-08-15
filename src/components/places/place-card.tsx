import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { PlaceType } from '../../types/types';
import FavoritesButton from '../favorites/favorites-button';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/store-hooks';
import { setActivePlaceId } from '../../store/active-place-slice';

type PlaceCardProps = PlaceType & {
  isFavoriteCard: boolean;
  isMainCard: boolean;
  isNearPlacesCard: boolean;
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {
    price,
    type,
    title,
    rating,
    previewImage,
    isPremium,
    isFavorite,
    id,
    isFavoriteCard = false,
    isMainCard = true,
    isNearPlacesCard = false,
  } = props;

  const dispatch = useAppDispatch();

  const handleCardMouseEnter = (): void => {
    if (isMainCard) {
      dispatch(setActivePlaceId(id));
    }
  };

  const handleCardMouseLeave = (): void => {
    if (isMainCard) {
      dispatch(setActivePlaceId(''));
    }
  };

  useEffect((): (() => void) => () => dispatch(setActivePlaceId('')), [dispatch]);

  return (
    <article
      className={`
        ${isMainCard ? 'cities__card' : ''}
        ${isFavoriteCard ? 'favorites__card' : ''}
        ${isNearPlacesCard ? 'near-places__card' : ''}
        place-card`}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`
          ${isMainCard ? 'cities__image-wrapper' : ''}
          ${isFavoriteCard ? 'favorites__image-wrapper' : ''}
          ${isNearPlacesCard ? 'near-places__image-wrapper' : ''}
          place-card__image-wrapper`}
      >
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={`${isFavoriteCard ? 150 : 260}`}
            height={`${isFavoriteCard ? 110 : 200}`}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={`${
          isFavoriteCard ? 'favorites__card-info' : ''
        } place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoritesButton isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
