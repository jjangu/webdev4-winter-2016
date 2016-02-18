var myLatLng = {lat: 44.540, lng: -78.546};
var mapDiv = document.getElementById('map');

function initMap() {
	var map = new google.maps.Map(mapDiv, {
		center: myLatLng,
		zoom: 14,
				// disableDefaultUI: true
				scrollwheel: false
			});
	var marker = new google.maps.Marker({
		map: map,
		position: myLatLng,
		title:"Tom's Bistro"
	})
};

function switchLocation(newLocation) {
		myLatLng = newLocation;
		initMap();
	}


$(document).ready(function() {
	var knopeLocation = {lat: 33.6438057, lng: -84.4305059};
	var haverfordLocation = {lat: 34.0092404, lng: -84.579674};
	var ludgateLocation = {lat: 33.6810208, lng: -83.5740891};
	$('#knopestreet').click(function() {switchLocation(knopeLocation);});
	$('#haverfordway').click(function() {switchLocation(haverfordLocation);});
	$('#ludgateavenue').click(function() {switchLocation(ludgateLocation);});

	// var feed = new Instafeed({
	// 	get: 'tagged',
	// 	tagName: 'awesome',
	// 	clientId: '	87afda06c6324a9abde9690b2bce6423'
	// });
	// feed.run();
});