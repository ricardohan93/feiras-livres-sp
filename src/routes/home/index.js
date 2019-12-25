import { h } from "preact";
import style from "./style";

import Map from "../../components/map";
import Searchbar from "../../components/searchbar";
import DesktopContent from "../../components/desktop";
import useMobileView from "../../components/useMobileView";
import GoogleMap from "../../components/googleMap";

import allMarkets from "../../static/feiras.json";

const Home = () => {
	const isMobile = useMobileView();

	return (
		<GoogleMap allMarkets={allMarkets.feirasLivres.feira}>
			{({ selectedMarket, nearbyMarkets }) => (
				<div class={style.home}>
					{isMobile && <Searchbar />}
					<Map selectedMarket={selectedMarket} />
					<DesktopContent
						selectedMarket={selectedMarket}
						nearbyMarkets={nearbyMarkets}
					/>
				</div>
			)}
		</GoogleMap>
	);
};

export default Home;
