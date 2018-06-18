
var map;
var service;

function handleSearchResults(results, status){
    console.log(results);

    for(var i=0; i <results.length; i++){
        var marker = new google.maps.Marker({
            position: results[i].geometry.location,
            map:map,
            icon: 'assets/images/cafe.png'
        });
    }

}

function performSearch(){ // 근처카페검색 함수생성

    var request = {
        name :"Cafes",
        radius: '500',
        location: currentLocation
    };

    service.nearbySearch(request, handleSearchResults); //handleSearchResults 콜백함수
}

function initAutocomplete() {
    currentLocation = {lat: 37.566535, lng: 126.977969199999964};
    map = new google.maps.Map(document.getElementById('my-address'), {
        zoom: 13,
        center: currentLocation,
        mapTypeId: 'roadmap'
    });

    // marker 생성
    var marker = new google.maps.Marker({
        position:currentLocation,
        map:map,
    });

    service = new google.maps.places.PlacesService(map);

    //submit버튼에 click 이벤트걸기
    var find = document.getElementById('submit');
    find.addEventListener('click', performSearch,false);

    //반경 radius 500 시각화하기
    var circleOptions = {
        strokeColor: "#bcffb4",
        strokeOpacity: 0.8,
        strokeWeight: 1.5,
        fillColor: "#bcffb4",
        fillOpacity: 0.35,
        map: map,
        center: currentLocation,
        radius: 500
    };
    var circle = new google.maps.Circle(circleOptions);

    // autocomplete search box 생성
    var autocomplete = document.getElementById('autocomplete');
    var searchBox = new google.maps.places.SearchBox(autocomplete);

    google.maps.event.addListener(searchBox, 'places_changed', function(){
        var places = searchBox.getPlaces();

        var bounds = new google.maps.LatLngBounds();
        var i, place;
        for(i=0; place=places[i];i++){
            console.log(place.geometry.location);
            bounds.extend(place.geometry.location);
            marker.setPosition(place.geometry.location);
        }
        map.fitBounds(bounds);
        map.setZoom(15);
    })

    //searchbox결과 보여지기
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });





    }

