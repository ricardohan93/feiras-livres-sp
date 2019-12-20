import { h } from "preact";
import { useState } from "preact/hooks";

function useMobileView() {
	const isDesktop = window.matchMedia(`(min-width: 964px)`);
	isDesktop.addListener(() => queryChanged());
	const [isMobile, setIsMobile] = useState(!isDesktop.matches);

	const queryChanged = () => {
		setIsMobile(!isDesktop.matches);
	};

	return isMobile;
}

export default useMobileView;
