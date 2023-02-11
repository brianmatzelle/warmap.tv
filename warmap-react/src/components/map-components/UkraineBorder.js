import { Polyline } from "@react-google-maps/api";

export default function UkraineBorder() {
    const ukraineBorderCoords = [];
    // This gets coordinate data from local json file, necessary so we can draw a russian territory
    const ukraineData = require('./map-data/gadm41_UKR_0.json');

    // Here we need to grab each coordinate and add it to russianBorderCoords,
    // so we can give google maps api a clean data array populated with russian controlled coordinates
    for (let i = 0; i < 8576; i++) {
        // as google's documentation suggests, the coordinate pairs should be objects nested in an array
        // current_lnglat == flightPlanCoordinates from https://developers.google.com/maps/documentation/javascript/shapes#polylines
        let current_lnglat = {
            lat: ukraineData.features[0].geometry.coordinates[0][0][i][1],
            lng: ukraineData.features[0].geometry.coordinates[0][0][i][0],
        };
        ukraineBorderCoords.push(current_lnglat);
    }

    return (
        <Polyline
            path={ukraineBorderCoords}
            options={{
                geodesic: true,
                strokeColor: '#0057B7',
                strokeOpacity: 1,
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