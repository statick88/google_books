// Importamos PropTypes para validar las propiedades del componente
import PropTypes from 'prop-types';

// Definimos el componente BookItem
const BookItem = ({ book }) => {
  // Renderizamos el componente
  return (
    <li>
      {/* Renderizamos el título del libro */}
      <h3>{book.volumeInfo.title}</h3>
      {/* Renderizamos los autores del libro, si existen */}
      <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
      {/* Aquí puedes agregar más detalles del libro según tus necesidades */}
    </li>
  );
};

// Definimos las propiedades del componente
BookItem.propTypes = {
  // La propiedad book debe ser un objeto y es requerida
  book: PropTypes.object.isRequired,
};

// Exportamos el componente
export default BookItem;