import { h, Component } from "preact";
import GoogleMapsLoader from "google-maps-api-loader";
import MarkerClusterer from "@google/markerclusterer";

class GoogleMap extends Component {
	constructor() {
		super();
		// this.updateSelectedMarket = this.updateSelectedMarket.bind(this);
		this.state = {
			selectedMarket: {
				bairro: "LIBERDADE",
				categoria: "T",
				feirantes: "45",
				latitude: "-23.5644533",
				logadouro: "RUA PANDIA CALOGERAS, S/N",
				longitude: "-46.63357819999999",
				metragem: "190,00",
				nome: "LIBERDADE/MODERNA",
				numero: "41351",
				sub: "SE"
			},
			nearbyMarkets: [
				{
					bairro: "LIBERDADE",
					categoria: "T",
					feirantes: "116",
					latitude: "-23.5569923",
					logadouro: "RUA TEIXEIRA LEITE, S/N",
					longitude: "-46.628468199999986",
					metragem: "526,00",
					nome: "THOMAZ DE LIMA",
					numero: "10014",
					sub: "SE"
				},
				{
					bairro: "LIBERDADE",
					categoria: "T",
					feirantes: "23",
					latitude: "-23.5569833",
					logadouro: "RUA DR PEDRO SEVERIANO, S/N",
					longitude: "-46.624508100000014",
					metragem: "96,00",
					nome: "SAO PAULO",
					numero: "40010",
					sub: "SE"
				},
				,
				{
					bairro: "ACLIMACAO",
					categoria: "T",
					feirantes: "69",
					latitude: "-23.5688893",
					logadouro: "RUA OLIVEIRA PEIXOTO, 79",
					longitude: "-46.62845179999999",
					metragem: "306,00",
					nome: "BATURITE",
					numero: "40029",
					sub: "SE"
				},
				{
					bairro: "LIBERDADE",
					categoria: "T",
					feirantes: "45",
					latitude: "-23.5644533",
					logadouro: "RUA PANDIA CALOGERAS, S/N",
					longitude: "-46.63357819999999",
					metragem: "190,00",
					nome: "LIBERDADE/MODERNA",
					numero: "41351",
					sub: "SE"
				},
				{
					bairro: "CAMBUCI",
					categoria: "T",
					feirantes: "58",
					latitude: "-23.5654071",
					logadouro: "RUA VITORIO EMANUEL, 312",
					longitude: "-46.625901699999986",
					metragem: "316,00",
					nome: "CAMBUCI",
					numero: "60011",
					sub: "SE"
				},
				{
					bairro: "ACLIMACAO",
					categoria: "T",
					feirantes: "163",
					latitude: "-23.5685393",
					logadouro: "RUA LOUREIRO DA CRUZ, 1",
					longitude: "-46.63573789999998",
					metragem: "710,00",
					nome: "ACLIMACAO",
					numero: "70025",
					sub: "SE"
				}
			]
		};
	}

	componentDidMount() {
		this.init(this.props.allMarkets);
	}

	// updateSelectedMarket(market) {
	// 	console.log("selected market", market);
	// 	this.setState({
	// 		selectedMarket: market
	// 	});
	// }

	// updateNearbyMarkets(markets) {
	// 	this.setState({
	// 		nearbyMarkets: markets
	// 	});
	// }

	async init(allMarkets) {
		console.log("init");
		// 	const googleMaps = await GoogleMapsLoader({
		// 		libraries: ["geometry"],
		// 		apiKey: process.env.GOOGLE_MAPS_KEY
		// 	});

		// 	const map = new googleMaps.maps.Map(document.getElementById("map"), {
		// 		center: { lat: -23.5569923, lng: -46.628468199999986 },
		// 		zoom: 13
		// 	});

		// 	const markers = allMarkets.map((market, i) => {
		// 		const marker = new googleMaps.maps.Marker({
		// 			position: new googleMaps.maps.LatLng(market.latitude, market.longitude)
		// 		});

		// 		marker.addListener("click", () => {
		// 			this.updateSelectedMarket(market);
		// 			// map.setZoom(20);
		// 			map.setCenter(marker.getPosition());
		// 		});

		// 		return marker;
		// 	});

		// 	map.addListener("dragend", () => {
		// 		const center = map.getCenter();

		// 		const nearbyMarkets = allMarkets
		// 			.filter(market => {
		// 				const minMaxLat = Math.abs(center.lat()) - Math.abs(market.latitude);
		// 				const minMaxLng = Math.abs(center.lng()) - Math.abs(market.longitude);

		// 				return (
		// 					minMaxLat < 0.01 &&
		// 					minMaxLat > -0.01 &&
		// 					minMaxLng < 0.01 &&
		// 					minMaxLng > -0.01
		// 				);
		// 			})
		// 			.slice(0, 10);

		// 		console.log(nearbyMarkets);
		// 		this.updateNearbyMarkets(nearbyMarkets);
		// 	});

		// 	const markerCluster = new MarkerClusterer(map, markers, {
		// 		imagePath:
		// 			"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
		// 	});
	}

	render() {
		const { children } = this.props;
		return children({
			selectedMarket: this.state.selectedMarket,
			nearbyMarkets: this.state.nearbyMarkets
		});
	}
}

export default GoogleMap;
