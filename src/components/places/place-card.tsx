import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlaceType } from '../../types/types';
import FavoritesButton from '../favorites/favorites-button';
import { AppRoute } from '../../const';

type PlaceCardProps = PlaceType & {
  isFavoriteCard: boolean;
  isMainCard: boolean;
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
  } = props;

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleMouseEnterOnCard = (): void => {
  // Эта логика только на главной должна работать
    if (isMainCard) {
      setActiveCardId(id);
    }
  };

  const handleMouseLeaveOnCard = (): void => {
    if (isMainCard) {
      setActiveCardId(null);
    }
  };

  //eslint-disable-next-line
  console.log('activeCardId: ', activeCardId);

  return (
    <article
      className={`
      ${isMainCard ? 'cities__card' : ''} ${
      isFavoriteCard ? 'favorites__card' : ''
    } place-card`}
      onMouseEnter={handleMouseEnterOnCard}
      onMouseLeave={handleMouseLeaveOnCard}
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
