import { LocationLinkType } from '../../types/types';

import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';
import { setCurrentCity } from '../../store/offersSlice';

function LocationItem(props: LocationLinkType) {
  const { title } = props;
  const currentCity = useAppSelector((state) => state.offers.currentCity);
  const dispatch = useAppDispatch();

  // потом объект передавать надо видимо
  const handleCityChange = (city: string) => {
    dispatch(setCurrentCity(city));
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${
          currentCity === title ? 'tabs__item--active' : ''
        }`}
        onClick={() => {
          handleCityChange(title);
        }}
      >
        <span>{title}</span>
      </a>
    </li>
  );
}

export default LocationItem;
