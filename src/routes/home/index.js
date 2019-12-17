import { h } from "preact";
import style from "./style";

import DesktopLayout from "../../components/desktop";
import MobileLayout from "../../components/mobile";

const Home = () => (
	<>
		<MobileLayout />
		<DesktopLayout />
	</>
);

export default Home;
