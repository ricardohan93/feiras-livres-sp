import { h, Component } from "preact";
import GoogleMapsLoader from "google-maps-api-loader";
import MarkerClusterer from "@google/markerclusterer";

class GoogleMap extends Component {
	constructor() {
		super();
		this.updateSelectedMarket = this.updateSelectedMarket.bind(this);
		this.state = {
			selectedMarket: {}
		};
	}

	componentDidMount() {
		this.init(this.props.allMarkets);
	}

	updateSelectedMarket(market) {
		console.log("on click - updateSelectedMarket");
		this.setState({
			selectedMarket: market
		});
	}

	async init(allMarkets) {
		const googleMaps = await GoogleMapsLoader({
			apiKey: process.env.GOOGLE_MAPS_KEY
		});

		const map = new googleMaps.maps.Map(document.getElementById("map"), {
			center: { lat: -23.5569923, lng: -46.628468199999986 },
			zoom: 13
		});

		const markers = allMarkets.map((market, i) => {
			const marker = new googleMaps.maps.Marker({
				position: new googleMaps.maps.LatLng(market.data.lat, market.data.lon)
			});

			marker.addListener("click", e => {
				console.log("event", e, market);
				this.updateSelectedMarket(market);
				// map.setZoom(20);
				map.setCenter(marker.getPosition());
			});

			return marker;
		});

		const markerCluster = new MarkerClusterer(map, markers, {
			imagePath:
				"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
		});
	}

	render() {
		const { children } = this.props;
		return children({
			market: this.state.selectedMarket
		});
	}
}

export default GoogleMap;
