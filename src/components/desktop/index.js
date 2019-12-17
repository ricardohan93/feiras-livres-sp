import { h } from "preact";
import style from "./style";

import Map from "../../components/map";

const DesktopLayout = () => (
	<div class={style.desktop}>
		<Map />
		<div>Desktop Content</div>
	</div>
);

export default DesktopLayout;
