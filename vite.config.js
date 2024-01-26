// Importamos la función defineConfig de Vite
// Esta función se utiliza para definir la configuración de Vite
import { defineConfig } from 'vite';

// Importamos el plugin de React para Vite
// Este plugin permite a Vite manejar proyectos de React
import react from '@vitejs/plugin-react-swc';

// Exportamos la configuración de Vite
// Aquí definimos que estamos utilizando el plugin de React
export default defineConfig({
  plugins: [react()],
});