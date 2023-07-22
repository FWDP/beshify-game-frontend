import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="shadow-md navbar bg-base-100">
			<div className="flex-1">
				<Link
					className="px-3 text-xl font-semibold normal-case"
					to="/"
				>
					Beshify
				</Link>
			</div>
			<nav className="flex-none">
				<ul className="px-1 font-semibold uppercase menu menu-horizontal">
					<li>
						<Link to="/how-to-play">How to play</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact us</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
