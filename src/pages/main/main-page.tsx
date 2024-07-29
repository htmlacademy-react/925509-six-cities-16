import Header from '../../components/header/header';
import PlaceList from '../../components/places/place-list';
import LocationList from '../../components/locations/location-list';
import SortingForm from '../../components/sorting/sorting-form';
import Map from '../../components/map/map';

import { locationsList, placesList } from '../../mocks/mocks';

function MainPage(): JSX.Element {
  // в данном случае харкодим, потом из state будем информацию забирать
  const isAuthorized = true;

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
                {placesList.length} places to stay in Amsterdam
              </b>
              <SortingForm />
              <PlaceList places={placesList} isNearPlacesList={false} />
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
