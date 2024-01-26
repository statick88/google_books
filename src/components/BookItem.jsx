// src/components/BookItem.jsx
import PropTypes from 'prop-types';

const BookItem = ({ book }) => {
  return (
    <li>
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
      {/* Agrega más detalles del libro según tus necesidades */}
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;
