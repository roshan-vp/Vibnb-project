maptilersdk.config.apiKey = mapKey;
const map = new maptilersdk.Map({
    container: 'map', // container id
    style: maptilersdk.MapStyle.STREETS,
    // center: [16.62662018, 49.2125578], // starting position [lng, lat]
    center: [76.2673, 9.9312], // Kochi
    zoom: 10 // starting zoom
});
