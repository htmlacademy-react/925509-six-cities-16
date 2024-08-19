import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/store-hooks';
import { uppercaseFirstLetter } from '../../utils';

import Header from '../../components/header/header';
import ReviewsForm from '../../components/reviews/reviews-form';
import PlaceList from '../../components/places/place-list';
import Loader from '../../components/loader/loader';
import NotFoundPage from '../not-found/not-found-page';

import OfferInsideList from '../../components/place/offer-inside-list';
import OfferHost from '../../components/place/offer-host';
import OfferGalleryList from '../../components/place/offer-gallery-list';
import ReviewsList from '../../components/reviews/reviews-list';

import Map from '../../components/map/map';

import FavoritesButton from '../../components/favorites/favorites-button';

import { fetchCurrentOffer } from '../../thunks/current-place';
import { fetchComments } from '../../thunks/comment';
import { fetchNearbyPlaces } from '../../thunks/nearby-place';

import {
  selectOfferData,
  selectRequestStatus,
  selectOfferComments
} from '../../store/current-place-slice';
import { selectNearbyOffers } from '../../store/nearby-places-slice';
import { useAppSelector } from '../../hooks/store-hooks';

import { PlaceType } from '../../types/types';
import { NEARBY_PLACES_MAX_COUNT, RequestStatus } from '../../const';

function OfferPage(): JSX.Element {
  // в данном случае харкодим, потом из state будем информацию забирать
  const isAuthorized = true;

  const params = useParams();
  const currentOfferId = params.id || '';

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentOffer(currentOfferId));
    dispatch(fetchComments(currentOfferId));
    dispatch(fetchNearbyPlaces(currentOfferId));
  }, [dispatch, currentOfferId]);

  const offerData = useAppSelector(selectOfferData);
  const offerComments = useAppSelector(selectOfferComments);
  const nearbyOffersData = useAppSelector(selectNearbyOffers);

  const requestStatus = useAppSelector(selectRequestStatus);
  const isLoading = requestStatus === RequestStatus.Loading;
  const hasError = requestStatus === RequestStatus.Error;

  const getNearbyPlaces = (places: PlaceType[]): PlaceType[] =>
    places.slice(0, NEARBY_PLACES_MAX_COUNT);

  const nearbyPlaces = getNearbyPlaces(nearbyOffersData);

  if (isLoading) {
    return <Loader />;
  }

  if (hasError || !offerData) {
    return <NotFoundPage />;
  }

  const {
    title,
    description,
    type,
    price,
    images,
    goods,
    host,
    isPremium,
    isFavorite,
    rating,
    bedrooms,
    maxAdults,
    city
  } = offerData;

  return (
    <div className="page">
      <Header isAuthorized={isAuthorized} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGalleryList images={images} />
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <FavoritesButton isFavorite={isFavorite} isPlacesList={false} />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${rating * 20}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {uppercaseFirstLetter(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} {bedrooms <= 1 ? 'Bedroom' : 'Bedrooms'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {maxAdults <= 1 ? 'adult' : 'adults'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInsideList goods={goods} />
              </div>
              <OfferHost
                isPro={host.isPro}
                name={host.name}
                avatarUrl={host.avatarUrl}
              />
              <div className="offer__description">
                <p className="offer__text">{description}</p>
              </div>

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{offerComments?.length}</span>
                </h2>
                <ReviewsList commentList={offerComments}/>
                <ReviewsForm />
              </section>
            </div>
          </div>
          <Map
            activePlaceId={currentOfferId}
            city={city.location}
            places={[...nearbyPlaces, offerData]}
            isMainPage={false}
          />

          {/* <section className="offer__map map" /> */}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <PlaceList places={nearbyPlaces} isNearPlacesList />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
