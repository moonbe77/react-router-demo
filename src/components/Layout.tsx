import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const Layout = () => {
	return (
		<div>
			<Menu />
			<div className="container">
				<main>
					<h1>This is in the layout</h1>
				</main>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
