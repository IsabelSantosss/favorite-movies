import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="movie-app">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
}

export default App;
