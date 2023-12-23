import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  mb-3 float-end p-5 m-5">
			
			<div className="ml-auto">
				<Link to="/addContact">
					<button className="btn btn-primary">Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
