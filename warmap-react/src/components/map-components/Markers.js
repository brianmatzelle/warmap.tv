import { Marker } from "@react-google-maps/api";
import React from "react";

export default function Markers({ handleToggle, setVideoData }) {
    const helmetIcon = {
        url: require('./assets/helmet-green.png'),
        scaledSize: new window.google.maps.Size(112, 75),
    }

    const markerData = require('./map-data/marker_data.json');
    const locations = markerData.locations;

    return (
        <>
        { 
            locations.map(location => {
                location.map(event => {
                    <Marker
                        position={event.latlng}
                        icon={helmetIcon}
                        onClick={() => {
                            setVideoData(event)
                            handleToggle()
                        }}
                    />
                })
            })
        }
        </>
    );
}