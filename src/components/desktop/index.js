import { h } from "preact";
import Match from "preact-router/match";
import style from "./style";

import Navbar from "../navbar";
import MarketsList from "../marketsList";

const DesktopContent = ({ selectedMarket, nearbyMarkets = [] }) =>
	console.log(nearbyMarkets) || (
		<section class={style.desktop}>
			<div class={style.layout}>
				<Navbar />
				<h1 class={style.title}>
					{nearbyMarkets.length} resultados{" "}
					<span class={style.lighter}>na sua região</span>
				</h1>
				<Match path='/:id'>
					{({ matches, path, url }) =>
						matches ? (
							<h1>{url}</h1>
						) : (
							nearbyMarkets.length > 0 && (
								<MarketsList nearbyMarkets={nearbyMarkets} />
							)
						)
					}
				</Match>
			</div>
		</section>
	);

export default DesktopContent;
