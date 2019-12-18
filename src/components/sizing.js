import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

function useIsMobile() {
	const isDesktop = window.matchMedia(`(min-width: 964px)`);
	isDesktop.addListener(() => queryChanged());
	const [isMobile, setIsMobile] = useState(false);

	const queryChanged = () => {
		setIsMobile(!isDesktop.matches);
	};

	useEffect(() => {
		console.log("chaaangedd");
	}, [isDesktop]);

	return isMobile;
}

export default useIsMobile;
