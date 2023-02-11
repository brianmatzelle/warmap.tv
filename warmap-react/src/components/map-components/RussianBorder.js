import { Polygon } from "@react-google-maps/api";

export default function RussianBorder() {
    const russianBorderCoords = [];
    // This gets coordinate data from local json file, necessary so we can draw a russian territory
    const russianData = require('./map-data/russia_prod.json');

    // Here we need to grab each coordinate and add it to russianBorderCoords,
    // so we can give google maps api a clean data array populated with russian controlled coordinates
    for (let i = 0; i < russianData.features[0].geometry.coordinates.length; i++) {
        let current_lnglat = {
            lat: russianData.features[0].geometry.coordinates[i][1],
            lng: russianData.features[0].geometry.coordinates[i][0],
        }
        russianBorderCoords.push(current_lnglat);
    }

    return (
        <Polygon
            path={russianBorderCoords}
            options={{
                fillColor: '#ff0000',
                fillOpacity: 0.35,
                strokeColor: '#ff0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                clickable: false,
                draggable: false,
                editable: false,
                visible: true,
                zIndex: 1
            }}
        />
    );
}