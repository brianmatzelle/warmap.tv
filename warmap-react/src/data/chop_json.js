for (let i = 0; i < 8576; i++) {
    if ( i < 790 || i > 7900) {
        let current_lnglat = {
            lat: borderData.features[0].geometry.coordinates[0][0][i][1],
            lng: borderData.features[0].geometry.coordinates[0][0][i][0],
        }
        ukraineProvinceCoords.push(current_lnglat);
    }
    if (i > 790 || i < 7900) {
        let current_lnglat = {
            lat:
            lng:
        }
        ukraineProvinceCoords.push(current_lnglat);
    }
}