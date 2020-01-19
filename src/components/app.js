import { h, Component } from "preact";

// import { render } from 'preact-render-to-string'
import { Router } from "preact-router";

import Footer from "./footer";
import Firebase, { FirebaseContext } from "./firebase";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id='app'>
				<FirebaseContext.Provider value={new Firebase()}>
					<Router onChange={this.handleRoute}>
						<Home path='/' />
						<Home path='/:id' />
					</Router>
					<Footer />
				</FirebaseContext.Provider>
			</div>
		);
	}
}
