import { h } from "preact";
import style from "./style";

import Map from "../../components/map";
import Searchbar from "../../components/searchbar";
import DesktopContent from "../../components/desktop";

import useMobileView from "../../components/useMobileView";

import GoogleMap, { GoogleMapContext } from "../../components/googleMap";

const Home = () => {
	const isMobile = useMobileView();

	return (
		<GoogleMapContext.Provider value={new GoogleMap()}>
			<div class={style.home}>
				{isMobile && <Searchbar />}
				<Map />
				<DesktopContent />
			</div>
		</GoogleMapContext.Provider>
	);
};

export default Home;
