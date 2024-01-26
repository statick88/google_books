// App.jsx
import { Route, Routes, Router} from "react-router-dom";
import SearchBooks from "./components/SearchBooks";
import Home from "./components/Home";
import "./App.css"; // Asegúrate de importar tu archivo de estilos aquí

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchBooks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
