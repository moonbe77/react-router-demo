import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./screens/Home";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<h1>About</h1>} />
					<Route path="/contact" element={<h1>Contact</h1>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
