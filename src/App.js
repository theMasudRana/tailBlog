import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";

const App = () => {
	return (
		<Router>
			<div className="app-wrapper">
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/create-post">
						<CreatePost />
					</Route>
				</Switch>

				<Footer />
			</div>
		</Router>
	);
};

export default App;
