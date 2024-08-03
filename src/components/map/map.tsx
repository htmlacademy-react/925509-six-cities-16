import { useRef, useEffect } from 'react';
import leaflet, { Icon } from 'leaflet';

import { PlaceType, LocationType } from '../../types/types';
import { MapIcon } from '../../const';

import useMap from '../../hooks/useMap';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  activePlaceId: string;
  city: LocationType;
  places: PlaceType[];
}

function Map(props: MapProps): JSX.Element {
  const {activePlaceId, city, places } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultIcon = new Icon(MapIcon.Default);
  const customIcon = new Icon(MapIcon.Active);

  useEffect(() => {
    if (map) {
      places.forEach((place) => {
        leaflet
          .marker({
            lat: place.location.latitude,
            lng: place.location.longitude,
          }, {
            icon: place.id === activePlaceId ? customIcon : defaultIcon,
          })
          .addTo(map);
      });
    }
  }, [activePlaceId, map, places]);

  return (
    <section
      className="cities__map map"
      style={{ height: '100%' }}
      ref={mapRef}
    />
  );
}

export default Map;
