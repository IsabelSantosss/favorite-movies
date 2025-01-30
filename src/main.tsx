import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Search from "./pages/Search/Search.tsx";
import Movie from "./pages/Movie/Movie.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}/>
          <Route path="movie/:id" element={<Movie />}/>
          <Route path="search" element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
