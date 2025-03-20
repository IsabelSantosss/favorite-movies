import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx"; 
import Movie from "./pages/Movie/Movie.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { theme } from "./theme.ts";
import { ThemeProvider } from "@mui/material";
import Search from "./pages/Search/Search.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
  // </StrictMode>
);
