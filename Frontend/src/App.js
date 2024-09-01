import React from "react";
import { BrowserRouter } from "react-router-dom";
import './components/i18n';
import AppProvider from "./components/common/AppContext";
import RouterSwitcher from "./components/common/RouterSwitcher";

const App = () => {

	return (
		<BrowserRouter>
			<AppProvider>
				<RouterSwitcher />
			</AppProvider>
		</BrowserRouter>
	)
}

export default App;
