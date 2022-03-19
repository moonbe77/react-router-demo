import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./screens/Home";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path="/about"
						element={
							<div>
								About Layout <Outlet />
							</div>
						}
					>
						<Route index element={<h1>About</h1>} />
						<Route path="/about/contact" element={<h1>Contact</h1>} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
