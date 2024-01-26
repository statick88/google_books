// Importamos las dependencias necesarias
import { createRoot } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Creamos la raíz de la aplicación en el elemento con id 'root'
// Esto es típicamente un elemento <div> en el archivo index.html
const rootElement = document.getElementById('root');

// Renderizamos la aplicación
// Envuelto en un Router para permitir la navegación entre diferentes componentes
createRoot(rootElement).render(
  <Router>
    <App />
  </Router>
);