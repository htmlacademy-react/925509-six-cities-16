import LocationItem from './location-item';
import { CityType } from '../../types/types';

type LocationListProps = {
  locations: CityType[];
};

function LocationList(props: LocationListProps): JSX.Element {
  const { locations } = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((locationItem: CityType) => (
          <LocationItem
            key={locationItem.name}
            name={locationItem.name}
            location={locationItem.location}
          />
        ))}
      </ul>
    </section>
  );
}

export default LocationList;
