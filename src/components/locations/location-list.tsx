import LocationItem from './location-item';
import { LocationType } from '../../types/types';

type LocationListProps = {
  locations: LocationType[];
};

function LocationList(props: LocationListProps): JSX.Element {
  const { locations } = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((locationItem: LocationType) => (
          <LocationItem
            key={locationItem.title}
            title={locationItem.title}
            link={locationItem.link}
          />
        ))}
      </ul>
    </section>
  );
}

export default LocationList;
