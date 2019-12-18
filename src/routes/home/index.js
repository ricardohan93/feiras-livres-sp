import { h } from "preact";
import style from "./style";

import Map from "../../components/map";
import DesktopContent from "../../components/desktop";

import sizing from "../../components/sizing";

const Home = () => {
	const result = sizing();
	console.log("result", result);

	return (
		<div class={style.home}>
			<Map />
			<DesktopContent />
		</div>
	);
};

export default Home;
