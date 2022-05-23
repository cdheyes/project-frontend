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
						<Route exact path="/" element={<Home/>} />
						<Route exact path="/food" element={<Food/>} />
						<Route exact path="/restaurant" element={<Restaurant/>} />
						<Route exact path="/contact" element={<Contact/>} />
						<Route exact path="/login" element={<Login/>} />
					</Routes>	
			</BrowserRouter>
		</div>
	);
};

export default App;
