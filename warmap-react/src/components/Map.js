import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';

const containerStyle = {
  width: "100%",
  height: '100%'
};

const center = {
    
    lat: 48.7,
    lng: 35
};

const mapId = process.env.REACT_APP_MAPS_ID;
const apiKey = process.env.REACT_APP_MAPS_API_KEY;

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: mapId,
    googleMapsApiKey: apiKey,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        options={{ mapId: mapId }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6.7}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}