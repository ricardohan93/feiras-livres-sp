import GoogleMapsLoader from "google-maps-api-loader";
import MarkerClusterer from "@google/markerclusterer";

const locations = [
	{ lat: -31.56391, lng: 147.154312 },
	{ lat: -33.718234, lng: 150.363181 },
	{ lat: -33.727111, lng: 150.371124 },
	{ lat: -33.848588, lng: 151.209834 },
	{ lat: -33.851702, lng: 151.216968 },
	{ lat: -34.671264, lng: 150.863657 },
	{ lat: -35.304724, lng: 148.662905 },
	{ lat: -36.817685, lng: 175.699196 },
	{ lat: -36.828611, lng: 175.790222 },
	{ lat: -37.75, lng: 145.116667 },
	{ lat: -37.759859, lng: 145.128708 },
	{ lat: -37.765015, lng: 145.133858 },
	{ lat: -37.770104, lng: 145.143299 },
	{ lat: -37.7737, lng: 145.145187 },
	{ lat: -37.774785, lng: 145.137978 },
	{ lat: -37.819616, lng: 144.968119 },
	{ lat: -38.330766, lng: 144.695692 },
	{ lat: -39.927193, lng: 175.053218 },
	{ lat: -41.330162, lng: 174.865694 },
	{ lat: -42.734358, lng: 147.439506 },
	{ lat: -42.734358, lng: 147.501315 },
	{ lat: -42.735258, lng: 147.438 },
	{ lat: -43.999792, lng: 170.463352 }
];

class GoogleMap {
	async init(allMarkets) {
		const googleMaps = await GoogleMapsLoader({
			apiKey: process.env.GOOGLE_MAPS_KEY
		});

		const map = new googleMaps.maps.Map(document.getElementById("map"), {
			center: { lat: -23.5569923, lng: -46.628468199999986 },
			zoom: 13
		});

		const markers = allMarkets.map(function(market, i) {
			const marker = new googleMaps.maps.Marker({
				position: new googleMaps.maps.LatLng(market.data.lat, market.data.lon)
			});

			marker.addListener("click", function() {
				map.setZoom(20);
				map.setCenter(marker.getPosition());
			});

			return marker;
		});

		const markerCluster = new MarkerClusterer(map, markers, {
			imagePath:
				"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
		});
	}
}

export default GoogleMap;
