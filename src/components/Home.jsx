// components/Home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>Bienvenido a la página principal. Puedes navegar a la página de búsqueda utilizando el enlace de abajo.</p>
      <Link to="/search">
        <button>Ir a la búsqueda</button>
      </Link>
    </div>
  );
};

export default Home;
