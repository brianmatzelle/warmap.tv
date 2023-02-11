import { Marker } from "@react-google-maps/api";

export default function Markers() {
    const helmetIcon = {
        url: require('./assets/helmet-green.png'),
        scaledSize: new window.google.maps.Size(112, 75),
    }

    // const locationList = [];
    // const markerFile = require('./map-data/markerData.json');
    // markerFile.forEach((marker) => {
    //     locationList.push(marker);
    // });

    return (
        <Marker 
            position={{lat: 48.7, lng: 35}}
            icon={helmetIcon}
        />
    );
}