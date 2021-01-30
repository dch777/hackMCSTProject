import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = (props) => {
	return (
		<div className="navigation">
			<nav class="navbar navbar-expand navbar-dark bg-dark">
				<div class="container">
					<Link class="navbar-brand" to="/">
						App-Name
					</Link>

					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<Link class="nav-link" to="/">
								Home
							</Link>
						</li>

						<li class="nav-item">
							<Link class="nav-link" to="/search">
								Search
							</Link>
						</li>

						<li class="nav-item">
							<Link class="nav-link" to="/login">
								Log In
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
