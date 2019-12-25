import { h } from "preact";
import { useContext, useEffect } from "preact/hooks";
import style from "./style.css";

import GoogleMap, { GoogleMapContext } from "../googleMap";
// import { FirebaseContext } from "../firebase";

const mockData = [
	{
		data: {
			sub: "AF",
			name: "VILA FORMOSA",
			category: "T",
			neighborhood: "VL FORMOSA",
			street: "AV TRUMAIN, S/N",
			size: "541,00",
			marketers: "96",
			lat: "-23.5654036",
			lon: "-46.536137499999995"
		}
	},
	{
		data: {
			sub: "AF",
			name: "VILA CARRAO",
			category: "T",
			neighborhood: "VL CALIFORNIA",
			street: "RUA COMEN GIL PINHEIRO, 325",
			size: "511,00",
			marketers: "89",
			lat: "-23.5414455",
			lon: "-46.54536010000004"
		}
	}
];

const Map = () => {
	// const googleMaps = useContext(GoogleMapContext);
	// const firebase = useContext(FirebaseContext);

	// useEffect(async () => {
	// const allMarkets = await firebase.getAllMarkets();
	// console.log(allMarkets);
	// googleMaps.init(allMarkets);

	// googleMaps.init(mockData);
	// }, []);

	return (
		<GoogleMap allMarkets={mockData}>
			{({ market }) => (
				<div id='map' class={style.map}>
					{market.data && <h1 class={style.title}>{market.data.name}</h1>}
				</div>
			)}
		</GoogleMap>
	);
};

export default Map;
