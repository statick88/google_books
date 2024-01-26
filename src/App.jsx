// App.jsx
import { Route, Routes } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';
import Home from './components/Home';
import './App.css'; // Asegúrate de importar tu archivo de estilos aquí

const App = () => {
  return (
    <div className="app-container"> {/* Agregamos una clase para el fondo oscuro */}
      <h1>Buscador de libros</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
};

export default App;

