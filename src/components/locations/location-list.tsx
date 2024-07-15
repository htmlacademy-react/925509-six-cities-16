import LocationItem from './location-item';
import { LocationLinkType } from '../../types/types';

type LocationListProps = {
  locations: LocationLinkType[];
};

function LocationList(props: LocationListProps): JSX.Element {
  const { locations } = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((locationItem: LocationLinkType) => (
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
