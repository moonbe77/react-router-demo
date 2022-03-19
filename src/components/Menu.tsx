import React from "react";
import { Link } from "react-router-dom";
import { Stack, styled } from "@mui/material";

const NavBar = styled("nav")({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "1rem",
	backgroundColor: "white",
	borderBottom: "1px solid #ccc",
	boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
	"& a": {
		color: "black",
		textDecoration: "none",
		"&:hover": {
			color: "black",
			textDecoration: "none",
		},
	},
});

const Menu = () => {
	return (
		<NavBar>
			<Stack direction="row" spacing={2}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/about/contact">Contact</Link>
			</Stack>
		</NavBar>
	);
};

export default Menu;
