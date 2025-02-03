import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Search from "./pages/Search/Search.tsx";
import Movie from "./pages/Movie/Movie.tsx";
import { Provider } from "react-redux"; 
import { store } from "./store.ts";
 
import '/fonts/BlinkMacSystemFontLight.ttf';
import '/fonts/BlinkMacSystemFontRegular.ttf';
import '/fonts/BlinkMacSystemFontMedium.ttf';
import '/fonts/BlinkMacSystemFontBold.ttf';
import '/fonts/BlinkMacSystemFontBlack.ttf';
  
createRoot(document.getElementById("root")!).render(
  // <StrictMode> 
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider> 
  // </StrictMode>
);
