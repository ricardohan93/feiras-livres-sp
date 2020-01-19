import { h } from "preact";
import style from "./style";

const Navbar = () => (
	<div class={style.navbar}>
		<img class={style.icons} src='/assets/icons/menu.svg' alt='categoria' />
		<div class={style.widgets}>
			<img class={style.icons} src='/assets/icons/bell.svg' alt='categoria' />
			<button class={style.button_invert}>Sign up</button>
			<button class={style.button}>Login</button>
		</div>
	</div>
);

export default Navbar;
