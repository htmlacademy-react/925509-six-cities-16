import { useRef, useEffect } from 'react';
import leaflet, { Icon, LayerGroup } from 'leaflet';

import { PlaceType, LocationType } from '../../types/types';
import { MapIcon } from '../../const';

import useMap from '../../hooks/use-map';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  activePlaceId: string;
  city: LocationType;
  places: PlaceType[];
}

const defaultIcon = new Icon(MapIcon.Default);
const customIcon = new Icon(MapIcon.Active);

function Map(props: MapProps): JSX.Element {
  const {activePlaceId, city, places } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([city.latitude, city.longitude], city.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

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
