import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white py-5">
      <div className="container justify-content-end">
        <Link to="/">
          <h1 className="text-uppercase justify-content-start">
            The International Yummy Guide
          </h1>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
