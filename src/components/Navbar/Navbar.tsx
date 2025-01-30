import { Link } from "react-router-dom"; 
import "./Navbar.css";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h3>
        <Link to="/">
        <BiSolidCameraMovie />
        </Link>
      </h3>
      <form>
        <input type="text" placeholder="Busque um filme" />
        <FaSearch />
      </form>
      <div className="menu">
        <Link to="/movie/1">Movies</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
