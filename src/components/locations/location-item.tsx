import { CityType } from '../../types/types';
import { locationsList } from '../../mocks/mocks';

import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';
import { setCurrentCity } from '../../store/offersSlice';
import { INITIAL_LOCATION } from '../../const';

function LocationItem(props: CityType) {
  const { name } = props;
  const currentCity = useAppSelector((state) => state.offers.currentCity);
  const dispatch = useAppDispatch();

  const handleCityChange = (cityName: string) => {
    const city = locationsList.find((locationItem) => locationItem.name === cityName) || INITIAL_LOCATION;
    dispatch(setCurrentCity(city));
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${
          currentCity && currentCity.name === name ? 'tabs__item--active' : ''
        }`}
        onClick={() => {
          handleCityChange(name);
        }}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default LocationItem;
