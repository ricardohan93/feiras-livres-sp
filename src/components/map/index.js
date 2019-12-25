import { h } from "preact";
import { useContext, useEffect } from "preact/hooks";
import style from "./style.css";

// import { FirebaseContext } from "../firebase";

const Map = ({ selectedMarket }) => {
	// const googleMaps = useContext(GoogleMapContext);
	// const firebase = useContext(FirebaseContext);

	// useEffect(async () => {
	// const allMarkets = await firebase.getAllMarkets();
	// console.log(allMarkets);
	// googleMaps.init(allMarkets);

	// googleMaps.init(mockData);
	// }, []);

	return (
		<div id='map' class={style.map}>
			{selectedMarket && <h1 class={style.title}>{selectedMarket.nome}</h1>}
		</div>
	);
};

export default Map;
