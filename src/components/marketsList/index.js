import { h } from "preact";
import { route } from "preact-router";
import style from "./style";

const goToMarket = marketID => {
	route(`/${marketID}`);
};

const MarketsList = ({ selectedMarket, nearbyMarkets = [] }) => (
	<ul class={style.market_list}>
		{nearbyMarkets.map(nearbyMarket => (
			<li onClick={() => goToMarket(nearbyMarket.numero)} class={style.market}>
				<div class={style.market_image} />
				<div class={style.market_info}>
					<h2>{nearbyMarket.nome}</h2>
					<h3>{nearbyMarket.logadouro}</h3>
					<h4>{nearbyMarket.bairro}</h4>
					<div class={style.additional_info}>
						<span>
							<img
								class={style.icons}
								src='/assets/icons/users.svg'
								alt='feirantes'
							/>
							{nearbyMarket.feirantes}
						</span>
						<span>
							<img
								class={style.icons}
								src='/assets/icons/maximize-2.svg'
								alt='metragem'
							/>
							{nearbyMarket.metragem} m²
						</span>
						<span>
							<img
								class={style.icons}
								src='/assets/icons/bell.svg'
								alt='categoria'
							/>
							{nearbyMarket.categoria}
						</span>
					</div>
				</div>
			</li>
		))}
	</ul>
);

export default MarketsList;
