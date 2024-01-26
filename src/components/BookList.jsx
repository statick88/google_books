// Importamos el componente BookItem para renderizar cada libro
import BookItem from './BookItem';

// Importamos PropTypes para validar las propiedades del componente
import PropTypes from 'prop-types';

// Definimos el componente BookList
const BookList = ({ books }) => {
  // Renderizamos el componente
  return (
    <div>
      {/* Título de la lista de libros */}
      <h2>Lista de Libros</h2>
      {/* Renderizamos la lista de libros */}
      <ul>
        {/* Para cada libro en el array de libros, renderizamos un componente BookItem */}
        {books.map((book) => (
          // Pasamos el libro como una propiedad al componente BookItem
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

// Definimos las propiedades del componente
BookList.propTypes = {
  // La propiedad books debe ser un array
  books: PropTypes.array.isRequired
};

// Exportamos el componente
export default BookList;