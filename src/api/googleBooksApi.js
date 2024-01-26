// Importamos axios para hacer solicitudes HTTP
import axios from 'axios';

// Creamos una instancia de axios con la URL base de la API de Google Books
const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

// Definimos la función getBooks que buscará libros basado en un término de búsqueda
export const getBooks = async (searchTerm) => {
  // Hacemos una solicitud GET a la API de Google Books con el término de búsqueda
  const response = await api.get('/volumes', {
    params: {
      q: searchTerm,
    },
  });

  // Devolvemos los libros de la respuesta
  return response.data.items;
};