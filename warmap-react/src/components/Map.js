import React, { useRef, useEffect } from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
};

function InitMap({center, zoom}) {
    const ref = useRef();
    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom,
        });
    });
    return <div ref={ref} id="map"/>;
}

export default function Map() {
    const center = { lat: 48.7, lng: 35 };
    const zoom = 6.7;
    return (
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY} render={render}>
            <InitMap center={center} zoom={zoom} />
        </Wrapper>
    );
}


/*
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import "./Map.css";

export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.api.REACT_APP_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <InitMap />
}

function InitMap() {
    const center = { lat: 48.7, lng: 35 };
    const zoom = 6.7;
    return <GoogleMap zoom={zoom} center={center} mapContainerClassName="mapContainer" />
}
*/