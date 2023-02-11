import { Marker } from "@react-google-maps/api";

export default function Markers() {
    const helmetIcon = {
        url: require('./assets/helmet-green.png'),
        scaledSize: new window.google.maps.Size(112, 75),
    }

    // const locationList = [];
    // const markerFile = require('./map-data/marker_data.json');
    // markerFile[0].forEach((marker) => {
    //     marker.forEach((info) => {
    //         locationList.push({
    //             lat: info.latlng.lat,
    //             lng: info.latlng.lng,
    //         });
    //     })
    // });

    return (
        <Marker 
            position={{lat: 48.7, lng: 35}}
            icon={helmetIcon}
        />
    );
}