import { Route, Routes } from "react-router-dom";
import Header from "./components/general/Header"; 
import Footer from "./components/general/Footer"; 
import SearchBooks from "./components/utils/SearchBooks";
import Home from "./components/Home";
import FavoriteBooks from "./components/pages/Fav";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBooks />} />
        <Route path="/favoritos" element={<FavoriteBooks />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
