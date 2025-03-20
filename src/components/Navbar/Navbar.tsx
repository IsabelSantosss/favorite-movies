import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { FormEventHandler, useState } from "react";
import { Button, IconButton } from "@mui/material";

type Props = {
  handleSearch: (query: string) => FormEventHandler<HTMLFormElement>;
};

const Navbar = ({ handleSearch }: Props) => {
  const [search, setSearch] = useState("");

  return (
    <nav id="navbar">
      <BiSolidCameraMovie className="logo-icon" />
      <form >
        <FaSearch onClick={() => handleSearch(search)}/>
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
