import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: any) => { 
    e.preventDefault(); 
		if (search) {
			return navigate(`/search?q=${search}`);
		}
	};

  return (
    <nav id="navbar">
      <BiSolidCameraMovie className="logo-icon" />

      <form>
        <FaSearch onClick={handleSearch} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar"
        />
      </form>

      <div className="menu">
        <Link to="/movie/1">
          <FaRankingStar className="menu-icon" />
          Favoritos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
