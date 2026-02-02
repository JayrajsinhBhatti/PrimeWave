import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import Watch from "./pages/Watch";
import Series from "./pages/Series";
import Genres from "./pages/Genres";


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
        <Route path="/genres/:genre" element={<Genres />} />
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;
