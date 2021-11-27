function initMap(data) {
    var lat = data[0]['Latitud'].replace(',', '.');
    var lng = data[0]['Longitud'].replace(',', '.');
    
    var center = {lat: parseFloat(lat), lng: parseFloat(lng)};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 9,
    });
    var infowindow =  new google.maps.InfoWindow({});
    var marker;
    data.forEach(e => {
        lat = parseFloat(e[`Latitud`].replace(',', '.'));
        lng = parseFloat(e[`Longitud`].replace(',', '.'));
        //console.log(lat,",",lng);
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng),
        map: map,
        title: e[`Direccion_incidente`],
        });
        google.maps.event.addListener(marker, 'click', (function (marker) {
            return function () {
                //infowindow.setContent(`Cluster: ${e['Kmeans_clusters']}<br>Barrio: ${e['Barrio']}<br>Comuna: ${e['Comuna']}<br>Direccion: ${e['Direccion_incidente']}<br>Gravedad: ${e['Gravedad_victima']}<br>Condicion: ${e['Condicion']}<br>Sexo: ${e['Sexo']}<br>Grupo Edad: ${e['Grupo_edad']}`);
                infowindow.setContent(`Cluster: ${e['Kmeans_clusters']}<br>Gravedad: ${e['Gravedad_victima']}<br>Condicion: ${e['Condicion']}<br>Sexo: ${e['Sexo']}<br>Grupo Edad: ${e['Grupo_edad']}`);
                infowindow.open(map, marker);
            }
        })(marker));
    });
}