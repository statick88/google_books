// Importamos las dependencias necesarias
import { useState } from 'react';
import axios from 'axios';

// Definimos el componente SearchBooks
const SearchBooks = () => {
  // Definimos el estado para el término de búsqueda y los libros
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  // Definimos la función que buscará los libros
  const searchBooks = async () => {
    // Hacemos una solicitud a la API de Google Books con el término de búsqueda
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: searchTerm
      }
    });
    // Actualizamos el estado de los libros con la respuesta de la API
    setBooks(response.data.items);
  };

  // Renderizamos el componente
  return (
    <div>
      {/* Campo de entrada para el término de búsqueda */}
      <input
        type="text"
        placeholder="Buscar libros..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && searchBooks()}
      />
      {/* Botón para buscar los libros */}
      <button onClick={searchBooks}>Buscar</button>
      {/* Renderizamos los libros */}
      {books.map((book, index) => (
        <div key={index}>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.description}</p>
        </div>
      ))}
    </div>
  );
};

// Exportamos el componente
export default SearchBooks;