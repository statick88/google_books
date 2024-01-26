import React, { useState } from "react";
import { getBooks } from "../../api/googleBooksApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BookList from "./BookList"; 
import Card from "react-bootstrap/Card"; 

const SearchBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    try {
      const items = await getBooks(searchTerm);
      setBooks(items);
    } catch (error) {
      console.error("Error al buscar libros:", error);
      setBooks([]);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <Card className="shadow" style={{ width: "100%" }}>
            <Card.Body>
              <h2 className="mb-3">Buscar Libros</h2>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar libros..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && searchBooks()}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    onClick={searchBooks}
                  >
                    <FontAwesomeIcon icon={faSearch} /> Buscar
                  </button>
                </div>
              </div>
              <BookList books={books} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;
