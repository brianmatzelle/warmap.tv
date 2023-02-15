import { Marker } from "@react-google-maps/api";
import React from "react";

export default function Markers({ handleToggle, setVideoData }) {
    const helmetIcon = {
        url: require('./assets/helmet-green.png'),
        scaledSize: new window.google.maps.Size(112, 75),
    }

    const markerData = require('./map-data/marker_data.json').markers;

    return (
        <>
        {
            markerData.map((marker, index) => {
                return (
                    <Marker
                        key={index}
                        position={marker.latlng}
                        icon={helmetIcon}
                        onClick={() => {
                            handleToggle();
                            setVideoData(marker);
                        }}
                    />
                )
            })
        }
        </>
    );
}