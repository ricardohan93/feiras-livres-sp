import { h } from "preact";
import style from "./style";

const DesktopContent = ({ selectedMarket, nearbyMarkets = [] }) => (
	<div class={style.desktop}>
		<div>Desktop Content: {selectedMarket.nome}</div>
		{nearbyMarkets.length > 0 && (
			<ul>
				{nearbyMarkets.map(nearbyMarket => (
					<li>{nearbyMarket.nome}</li>
				))}
			</ul>
		)}
	</div>
);

export default DesktopContent;
