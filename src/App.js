import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Navbar />

			<Switch>
				<Route path="/">
					<Home />
				</Route>

				<Route path="/search">
					<Search />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
