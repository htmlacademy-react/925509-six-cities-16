import { useAppSelector } from '../../hooks/store-hooks';
import { Helmet } from 'react-helmet-async';
import { RequestStatus } from '../../const';
import { sortPlaceList } from '../../utils';

import {
  selectCurrentCity,
  selectPlacesList,
  selectCurrentSortingOption,
  selectRequestStatus,
} from '../../store/places-slice';
import { selectActivePlaceId } from '../../store/active-place-slice';

import Header from '../../components/header/header';
import PlaceList from '../../components/places/place-list';
import LocationList from '../../components/locations/location-list';
import SortingForm from '../../components/sorting/sorting-form';
import Map from '../../components/map/map';
import Loader from '../../components/loader/loader';
import Error from '../../components/error/error';

import { locationsList } from '../../const';

type PageProps = {
  isAuthorized: boolean;
};

function MainPage(props: PageProps): JSX.Element {
  const { isAuthorized } = props;

  const placesList = useAppSelector(selectPlacesList);
  const currentCity = useAppSelector(selectCurrentCity);
  const currentSortingValue = useAppSelector(selectCurrentSortingOption);
  const requestStatus = useAppSelector(selectRequestStatus);

  const isLoading = requestStatus === RequestStatus.Loading;
  const hasError = requestStatus === RequestStatus.Error;

  const filteredPlacesList = placesList.filter(
    (placeItem) => placeItem.city.name === currentCity.name
  );

  const isPageEmpty = !filteredPlacesList.length;

  const sortedPlaceList = sortPlaceList(
    filteredPlacesList,
    currentSortingValue
  );

  const activeId = useAppSelector(selectActivePlaceId);

  return (
    <div
      className={`
        page page--gray page--main
        ${isPageEmpty ? 'page__main--index-empty' : ''}
      `}
    >
      <Helmet>
        <title>6 cities: main page</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} isLoginPage={false} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList locations={locationsList} />
        </div>
        {isLoading && <Loader />}
        {hasError && <Error />}
        {!isLoading && !hasError && !isPageEmpty && (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {filteredPlacesList.length}{' '}
                  {filteredPlacesList.length <= 1 ? 'place' : 'places'} to stay
                  in {currentCity.name}
                </b>
                <SortingForm />
                <PlaceList places={sortedPlaceList} isNearPlacesList={false} />
              </section>
              <div className="cities__right-section">
                <Map
                  places={filteredPlacesList}
                  activePlaceId={activeId}
                  city={currentCity.location}
                  isMainPage
                />
              </div>
            </div>
          </div>
        )}
        {!isLoading && !hasError && isPageEmpty && (
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in{' '}
                    {currentCity.name}
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainPage;
