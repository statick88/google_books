import React, { useState } from "react";
import BookItem from "./BookItem";
import Pagination from "./pagination/Pagination";

const BookList = ({ books }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ul>
        {currentBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
      <Pagination
        itemsPerPage={booksPerPage}
        totalItems={books.length}
        paginate={paginate}
      />
    </div>
  );
};

export default BookList;
