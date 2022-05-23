import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Home from "./pages/home";
import Login from "./pages/login.js";
import Food from "./pages/food";
import Restaurant from './pages/restaurant';

import "../src/style/App.css";
import { Navbar } from './components/navbar';

const App = () => {

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
					<Routes>
						<Route exact path="/" pages={Home}></Route>
						<Route exact path="/food" pages={Food}></Route>
						<Route exact path="/restaurant" pages={Restaurant}></Route>
						<Route exact path="/contact" pages={Contact}></Route>
						<Route exact path="/login" pages={Login}></Route>
					</Routes>	
			</BrowserRouter>
		</div>
	);
};

export default App;
