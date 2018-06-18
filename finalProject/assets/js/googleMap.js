


/* google map js */
    var marker;
    function initMap() {
        var loc = {lat: 37.566535, lng: 126.97796919999996}
        var map = new google.maps.Map(document.getElementById('my-address'), {
            zoom: 13,
            center: loc //서울
        });

         marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: loc
        });
        marker.addListener('click', toggleBounce);
    }

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }


window.addEventListener('load',initMap(),false);