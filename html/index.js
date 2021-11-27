function initMap(data) {
    var lat = data[0]['Latitud'].replace(',', '.');
    var lng = data[0]['Longitud'].replace(',', '.');
    var center = {
        lat: parseFloat(lat),
        lng: parseFloat(lng)
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 12,
    });
    var infowindow = new google.maps.InfoWindow({});
    var marker;
    //clusters
    var cluster0 = document.getElementById('cluster0').checked;
    var cluster1 = document.getElementById('cluster1').checked;
    var cluster2 = document.getElementById('cluster2').checked;
    var cluster3 = document.getElementById('cluster3').checked;
    //Gravedad accidente
    var heridos = document.getElementById('heridos').checked;
    var muertos = document.getElementById('muertos').checked;
    //Condición de sujeto
    var acompanante = document.getElementById('acompanante').checked;
    var ciclista = document.getElementById('ciclista').checked;
    var motociclista = document.getElementById('motociclista').checked;
    var pasajero = document.getElementById('pasajero').checked;
    var peaton = document.getElementById('peaton').checked;
    //sexo
    var masculino = document.getElementById('masculino').checked;
    var femenino = document.getElementById('femenino').checked;
    //edad
    var grupoEdad1 = document.getElementById('grupoEdad1').checked;
    var grupoEdad2 = document.getElementById('grupoEdad2').checked;
    var grupoEdad3 = document.getElementById('grupoEdad3').checked;
    var grupoEdad4 = document.getElementById('grupoEdad4').checked;
    var grupoEdad5 = document.getElementById('grupoEdad5').checked;
    var grupoEdad6 = document.getElementById('grupoEdad6').checked;
    var grupoEdad7 = document.getElementById('grupoEdad7').checked;
    var grupoEdad8 = document.getElementById('grupoEdad8').checked;
    //año
    var año2019 = document.getElementById('año2019').checked;
    var año2020 = document.getElementById('año2020').checked;
    var año2021 = document.getElementById('año2021').checked;

    data.forEach(e => {
        if (cluster0 && e['Kmeans_clusters'] == 0) {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (cluster1 && e['Kmeans_clusters'] == 1) {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (cluster2 && e['Kmeans_clusters'] == 2) {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (cluster3 && e['Kmeans_clusters'] == 3) {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (heridos && e['Gravedad_victima'] == 'Heridos') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (muertos && e['Gravedad_victima'] == 'Muertos') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (acompanante && e['Condicion'] == 'AcompaÃ±ante de motocicleta') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (ciclista && e['Condicion'] == 'Clicista') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (motociclista && e['Condicion'] == 'Motociclista') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (pasajero && e['Condicion'] == 'Pasajero') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (peaton && e['Condicion'] == 'Peaton') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (masculino && e['Sexo'] == 'M') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (femenino && e['Sexo'] == 'F') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (femenino && e['Sexo'] == 'F') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (grupoEdad1 && e['Grupo_edad'] == '0 - 9') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (grupoEdad2 && e['Grupo_edad'] == '20 - 29') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (grupoEdad3 && e['Grupo_edad'] == '30 - 39') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (grupoEdad4 && e['Grupo_edad'] == '40 - 49') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (grupoEdad5 && e['Grupo_edad'] == '50 - 59') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (grupoEdad6 && e['Grupo_edad'] == '60 - 69') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (grupoEdad7 && e['Grupo_edad'] == '70 - 79') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (grupoEdad8 && e['Grupo_edad'] == '80 o mas') {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (año2019 && e['A\u00f1o'] == 2019) {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (año2020 && e['A\u00f1o'] == 2020) {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
        if (año2021 && e['A\u00f1o'] == 2021) {
            lat = parseFloat(e[`Latitud`].replace(',', '.'));
            lng = parseFloat(e[`Longitud`].replace(',', '.'));
            marker = createMarket(lat, lng, map, e)
        }
    });

    function createMarket(lat, lng, map, e) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            title: e[`Direccion_incidente`],
        });
        google.maps.event.addListener(marker, 'click', (function (marker) {
            return function () {
                //infowindow.setContent(`Cluster: ${e['Kmeans_clusters']}<br>Barrio: ${e['Barrio']}<br>Comuna: ${e['Comuna']}<br>Direccion: ${e['Direccion_incidente']}<br>Gravedad: ${e['Gravedad_victima']}<br>Condicion: ${e['Condicion']}<br>Sexo: ${e['Sexo']}<br>Grupo Edad: ${e['Grupo_edad']}`);
                infowindow.setContent(`Cluster: ${e['Kmeans_clusters']}<br>Gravedad: ${e['Gravedad_victima']}<br>Condicion: ${e['Condicion']}<br>Sexo: ${e['Sexo']}<br>Grupo Edad: ${e['Grupo_edad']}<br>Año: ${e['A\u00f1o']}`);
                infowindow.open(map, marker);
            }
        })(marker));
    }
}

document.getElementById('button').addEventListener('click', function (e) {
    e.preventDefault();
    var url = `http://localhost:5000/`;
    $.ajax({
        type: `GET`,
        url: url,
        success: function (response) {
            initMap(response);
        }
    });
})