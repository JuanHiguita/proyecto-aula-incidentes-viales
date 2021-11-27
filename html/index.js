function initMap(data) {
    var lat = data[0]['Latitud'].replace(',', '.');
    var lng = data[0]['Longitud'].replace(',', '.');
    var center = {lat: parseFloat(lat), lng: parseFloat(lng)};
    console.log(center);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: center
    });
    var infowindow =  new google.maps.InfoWindow({});
    var marker;
    
    data.forEach(e => {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(parseFloat(e[`Latitud`].replace(',', '.')), parseFloat(e[`Longitud`].replace(',', '.'))),
        map: map,
        title: e[`Direccion_incidente`],
        });
        google.maps.event.addListener(marker, 'click', (function (marker) {
            return function () {
                infowindow.setContent(`Barrio: ${e['Barrio']}<br>Comuna: ${e['Comuna']}<br>Direccion: ${e['Direccion_incidente']}<br>Gravedad: ${e['Gravedad_victima']}<br>Condicion: ${e['Condicion']}<br>Sexo: ${e['Sexo']}<br>Grupo Edad: ${e['Grupo_edad']}`);
                infowindow.open(map, marker);
            }
        })(marker));
    });
}