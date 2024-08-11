import { useState } from 'react';

import { useAppSelector } from '../../hooks/storeHooks';

import Header from '../../components/header/header';
import PlaceList from '../../components/places/place-list';
import LocationList from '../../components/locations/location-list';
import SortingForm from '../../components/sorting/sorting-form';
import Map from '../../components/map/map';

import { LocationType } from '../../types/types';
import { locationsList, placesList } from '../../mocks/mocks';

function MainPage(): JSX.Element {
  // в данном случае харкодим, потом из state будем информацию забирать
  const isAuthorized = true;
  // временно, чтобы показывался Амстердам
  const AMSTERDAM_CITY: LocationType = placesList[0].city.location;
  // console.log(placesList[0].city);

  const [activePlaceId, setActiveCardId] = useState<string>('');

  // const placesList1 = useAppSelector((state) => state.offers.offers);
  const currentCity = useAppSelector((state) => state.offers.currentCity);

  const handlePlaceItemHover = (placeItemId: string) => {
    setActiveCardId(placeItemId);
  };

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
                {placesList.length} places to stay in {currentCity}
              </b>
              <SortingForm />
              <PlaceList
                places={placesList}
                isNearPlacesList={false}
                onListMouseEnter={handlePlaceItemHover}
              />
            </section>
            <div className="cities__right-section">
              <Map
                places={placesList}
                activePlaceId={activePlaceId}
                city={AMSTERDAM_CITY}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
