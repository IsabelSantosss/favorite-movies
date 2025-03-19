import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";  
import { FaRankingStar } from "react-icons/fa6";

const Navbar = () => {
  const handleSearch = () => {

  };
  return (  
    <nav id="navbar">
      <h3>
        <Link to="/">
          <BiSolidCameraMovie className="logo-icon" />
        </Link>
      </h3>
      <form>
        <FaSearch />
        <input type="text" placeholder="Pesquisar" onClick={handleSearch} />
      </form>
      <div className="menu"> 
          <Link to="/movie/1">
          <FaRankingStar className="menu-icon"/>Favoritos</Link>  
      </div>
    </nav>
  );
};

export default Navbar;
