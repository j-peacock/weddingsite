// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// -------------------------------------------------------------
// Countdown Time Setup
// -------------------------------------------------------------

$('.countdown').downCount({
    date: '2/11/2017 16:00:00',
    offset: -5
}, function () {
    //alert('WOOT WOOT, done!');
});
     

// -------------------------------------------------------------
// Google Map Customization
// -------------------------------------------------------------

jQuery(function ($) {
    var map;

    /*map = new google.maps.Map(document.getElementById('map-wrapper'),{
        lat: 30.278958,
        lng: -97.747752,
    });*/

    /*map = new GMaps({
        el: '#map-wrapper',
        lat: 30.278958,
        lng: -97.747752,
        scrollwheel:false,
        zoom: 16,
        zoomControl : true,
        panControl : true,
        streetViewControl : true,
        mapTypeControl: false,
        overviewMapControl: false,
        clickable: true
    });*/

    var allPlaces = {
        caswell: {
            location: {
                lat: 30.278911,
                lng: -97.747763
            },
            placeId: "ChIJ8UnnnHO1RIYRVPQ4ShkEPsg"
        },
        suites: {
            location: {
                lat: 30.277428,
                lng: -97.742591
            },
            placeId: "ChIJ9-avaXW1RIYRjjlM-dATa08"
        },
        rooms: {
            location: {
                lat: 30.277184,
                lng: -97.729108
            },
            placeId: "ChIJ7fCNMCLKRIYRdK6eYV47Z8Y"
        }
    }

    /*var placeRequestFailures = {};
    
    var places = new google.maps.places.PlacesService(map);

    var markPlace = function(placeId){
        places.getDetails({ placeId: placeId }, 
            function (result, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    addMarker({placeId: placeId, location: result.geometry.location})
                } else {

                }
            }
        );
    }*/

    function addMarker(place){
        var marker = new google.maps.Marker({
            map: map,
            place: place
        });
    }

    for(key in allPlaces){
        //addMarker(allPlaces[key]);
    }

    //allPlaces.forEach(markPlace);

    /*map.addMarker({
        place: {placeId: "ChIJ8UnnnHO1RIYRVPQ4ShkEPsg"},
        label: "Caswell House",
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#d9d9d9',
    });

    map.addMarker({
        lat: 30.277428,
        lng: -97.742591,
        label: "DoubleTree Suites - W 15th St",
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#d9d9d9',
    });

    map.addMarker({
        lat: 30.277184,
        lng: -97.729108,
        label: "DoubleTree - University Area",
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#d9d9d9',
    });*/

    var styles = [ 

    {
        "featureType": "road",
        "stylers": [
        { "color": "#ffffff" }
        ]
    },{
        "featureType": "water",
        "stylers": [
        { "color": "#99b3cc" }
        ]
    },{
        "featureType": "landscape",
        "stylers": [
        { "color": "#f2efe9" }
        ]
    },{
        "elementType": "labels.text.fill",
        "stylers": [
        { "color": "#d3cfcf" }
        ]
    },{
        "featureType": "poi",
        "stylers": [
        { "color": "#bfbfbf" }
        ]
    },{
        "elementType": "labels.text",
        "stylers": [
        { "saturation": 1 },
        { "weight": 0.1 },
        { "color": "#000000" }
        ]
    }

    ];

    /*map.addStyle({
        styledMapName:"Styled Map",
        styles: styles,
        mapTypeId: "map_style"  
    });

    //map.setStyle("map_style");*/
}());

/**
 * MAILCHIMP
 */
$('#mc-form').ajaxChimp({ 
    url: 'http://doelit.us10.list-manage.com/subscribe/post?u=b02e4f21e264536eff4820875&amp;id=4d57faf2cb' 
    /* Replace Your AjaxChimp Subscription Link */
});
