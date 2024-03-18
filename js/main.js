function initMap() {
    // Coordinates for the University of Melbourne
    var melbourneUni = {lat: -37.7964, lng: 144.9612};

    // Creating a new map object centered at the University of Melbourne
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,  // Zoom level
        center: melbourneUni  // Center of the map
    });

    // Creating a marker for the University of Melbourne
    var marker = new google.maps.Marker({
        position: melbourneUni,
        map: map,
        title: 'University of Melbourne'
    });
}
