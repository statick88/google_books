// Importamos el componente Link de react-router-dom para la navegación
import { Link } from 'react-router-dom';

// Definimos el componente Home
const Home = () => {
  // Renderizamos el componente
  return (
    <div>
      {/* Mensaje de bienvenida */}
      <p>Bienvenido a la página principal. Puedes navegar a la página de búsqueda utilizando el enlace de abajo.</p>
      {/* Enlace a la página de búsqueda */}
      <Link to="/search">
        {/* Botón que lleva a la página de búsqueda */}
        <button>Ir a la búsqueda</button>
      </Link>
    </div>
  );
};

// Exportamos el componente
export default Home;