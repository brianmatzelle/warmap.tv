import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import RussianBorder from './map-components/RussianBorder';
import Markers from './map-components/Markers';
import UkraineBorder from './map-components/UkraineBorder';

const center = {
    // ukraine center lat/lng
    lat: 48.7,
    lng: 35
};

const mapId = process.env.REACT_APP_MAPS_ID;
const apiKey = process.env.REACT_APP_MAPS_API_KEY;

export default function Map({ height, handleToggle, setVideoData }) {
  const containerStyle = {
    width: "100vw",
    height: height
  };

  const { isLoaded } = useJsApiLoader({
    id: mapId,
    googleMapsApiKey: apiKey,
  })

  return isLoaded ? (
      <GoogleMap
        options={{ mapId: mapId }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6.7}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <UkraineBorder />
        <RussianBorder />
        <Markers handleToggle={handleToggle} setVideoData={setVideoData} />
      </GoogleMap>
  ) : <></>
}