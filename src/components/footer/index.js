import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Footer = () => (
	<footer class={style.footer}>
		<nav>
			<Link activeClassName={style.active} href='#'>
				<img class={style.icons} src='/assets/icons/map.svg' alt='map' />
			</Link>
			<Link activeClassName={style.active} href='#'>
				<img class={style.icons} src='/assets/icons/location.svg' alt='map' />
			</Link>
			<Link activeClassName={style.active} href='#'>
				<img class={style.icons} src='/assets/icons/clock.svg' alt='map' />
			</Link>
			<Link activeClassName={style.active} href='#'>
				<img class={style.icons} src='/assets/icons/navigation.svg' alt='map' />
			</Link>
		</nav>
	</footer>
);

export default Footer;
