// components/SearchBooks.jsx
import { useState } from 'react';
import axios from 'axios';
import '../styles/SearchBooks.css';

const SearchBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Cambia esto al número de elementos que quieres por página

  const searchBooks = async () => {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: searchTerm
      }
    });

    const uniqueBooks = Array.from(new Set(response.data.items.map(book => book.volumeInfo.title)))
      .map(title => response.data.items.find(book => book.volumeInfo.title === title));

    setBooks(uniqueBooks);
  };

  const totalPages = Math.ceil(books.length / itemsPerPage);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const currentBooks = books.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const renderBookCard = (book) => (
    <div key={book.id} className="book-card">
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.description}</p>
      <p><strong>Autor:</strong> {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
      <p><strong>Editorial:</strong> {book.volumeInfo.publisher}</p>
      <p><strong>Fecha de publicación:</strong> {book.volumeInfo.publishedDate}</p>
      <p><strong>Páginas:</strong> {book.volumeInfo.pageCount}</p>
      <p><strong>Categorías:</strong> {book.volumeInfo.categories && book.volumeInfo.categories.join(', ')}</p>
      <p><strong>Idioma:</strong> {book.volumeInfo.language}</p>
      <p><strong>Enlace:</strong> <a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">Ver libro</a></p>
      <hr />
    </div>
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar libros..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && searchBooks()}
      />
      <button onClick={searchBooks}>Buscar</button>

      {books.length === 0 ? (
        <p>No se encontraron resultados</p>
      ) : (
        <div className="books-container">
          {currentBooks.map(book => renderBookCard(book))}
        </div>
      )}

      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => changePage(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;git checkout -b nombre-de-tu-nueva-rama