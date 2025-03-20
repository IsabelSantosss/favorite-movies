import "./App.css";
import {  Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() { 
  return (
    <div className="movie-app">
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default App;
