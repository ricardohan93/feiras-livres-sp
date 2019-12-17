import { h } from "preact";
import style from "./style.css";

const Searchbar = () => (
	<div class={style.searchbar}>
		<input
			placeholder='inserir endereço'
			value=''
			type='text'
			aria-label='Coloque um endereço'
		/>
	</div>
);

export default Searchbar;
