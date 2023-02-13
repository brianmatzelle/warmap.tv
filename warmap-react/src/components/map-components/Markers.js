import { Marker } from "@react-google-maps/api";
import React from "react";

export default function Markers({ handleToggle, setVideoData }) {
    const helmetIcon = {
        url: require('./assets/helmet-green.png'),
        scaledSize: new window.google.maps.Size(112, 75),
    }

    const markerData = require('./map-data/marker_data.json');
    const markers = markerData.markers;

    const onLoad = marker => {
        console.log('marker: ', marker)
      }

    return (
        <>
        {
            markers.forEach((marker, index) => {   
                console.log("INDEX="+index);
                console.log(marker.latlng);
                <Marker
                    key={index}
                    onLoad={onLoad}
                    position={marker.latlng}
                    icon={helmetIcon}
                />
            })
        }
        </>
    );
}