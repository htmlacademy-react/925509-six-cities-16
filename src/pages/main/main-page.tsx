import { useAppSelector } from '../../hooks/storeHooks';
// import { SortingTypeKey } from '../../types/types';
import { sortingPlaceList } from '../../utils';

import Header from '../../components/header/header';
import PlaceList from '../../components/places/place-list';
import LocationList from '../../components/locations/location-list';
import SortingForm from '../../components/sorting/sorting-form';
import Map from '../../components/map/map';

import { locationsList } from '../../mocks/mocks';

function MainPage(): JSX.Element {
  // в данном случае харкодим, потом из state будем информацию забирать
  const isAuthorized = true;

  const placesList = useAppSelector((state) => state.places.places);
  const currentCity = useAppSelector((state) => state.places.currentCity);
  const currentSortingValue = useAppSelector(
    (state) => state.places.currentSortingOption
  );
  const filteredPlacesList = placesList.filter(
    (placeItem) => placeItem.city.name === currentCity.name
  );

  const sortedPlaceList = sortingPlaceList(filteredPlacesList, currentSortingValue);

  const activeId = useAppSelector((state) => state.activePlace.id);

  return (
    <div className="page page--gray page--main">
      <Header isAuthorized={isAuthorized} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList locations={locationsList} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredPlacesList.length} places to stay in {currentCity.name}
              </b>
              <SortingForm />
              <PlaceList places={sortedPlaceList} isNearPlacesList={false} />
            </section>
            <div className="cities__right-section">
              <Map
                places={filteredPlacesList}
                activePlaceId={activeId}
                city={currentCity.location}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
