import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link className="normal-case text-xl font-semibold px-3" to="/">
          Beshify
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1 uppercase font-semibold">
          <li>
            <Link to="/how-to-play">How to play</Link>
          </li>
          <li>
            <Link to="/about">How to play</Link>
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
