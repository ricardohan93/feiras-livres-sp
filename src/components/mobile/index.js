import { h } from "preact";
import style from "./style";

import Map from "../../components/map";
import Searchbar from "../../components/searchbar";

const MobileLayout = () => (
	<div class={style.mobile}>
		<Searchbar />
		<Map />
	</div>
);

export default MobileLayout;
