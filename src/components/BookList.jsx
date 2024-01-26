// src/components/BookList.jsx
import BookItem from './BookItem';

import PropTypes from 'prop-types';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Lista de Libros</h2>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookList;
