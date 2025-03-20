import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useAppDispatch } from "./store";
import { getFilteredMovies } from "./store/slices/moviesSlice";

function App() {
  const dispatch = useAppDispatch();

  const handleSearch = (query: string): any => { 
    if (query) {
      dispatch(getFilteredMovies(query));
    }
  };
 
    
  return (
    <div className="movie-app">
      <Navbar handleSearch={handleSearch}></Navbar>
      <Outlet />
    </div>
  );
}

export default App;
