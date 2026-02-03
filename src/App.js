import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/movies/pages/Home";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import "./styles/App.css";
import Navbar from "./components/layout/Navbar";
import MovieDetails from "./features/movies/pages/MovieDetails";
import Watch from "./features/movies/pages/Watch";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watch/:id" element={<Watch />} />

      </Routes>
    </BrowserRouter>
  );
}


export default App;
