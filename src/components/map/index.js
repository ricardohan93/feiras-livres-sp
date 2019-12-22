import { h } from "preact";
import { useContext, useEffect } from "preact/hooks";
import style from "./style.css";

import { GoogleMapContext } from "../googleMap";
import { FirebaseContext } from "../firebase";

const Map = () => {
	const googleMaps = useContext(GoogleMapContext);
	const firebase = useContext(FirebaseContext);

	useEffect(async () => {
		const allMarkets = await firebase.getAllMarkets();
		console.log(allMarkets);
		googleMaps.init(allMarkets);
	}, []);

	return (
		<div id='map' class={style.map}>
			map
		</div>
	);
};

export default Map;
