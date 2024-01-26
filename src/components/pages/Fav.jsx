import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Favorites = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      setFavoriteBooks(favorites.books);
    }
  }, []);

  const removeFromFavorites = (bookId) => {
    const updatedFavorites = favoriteBooks.filter((book) => book.id !== bookId);
    const favoritesData = {
      expiry: null,
      books: updatedFavorites,
    };
    localStorage.setItem("favorites", JSON.stringify(favoritesData));
    setFavoriteBooks(updatedFavorites);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="mt-5 p-4 border rounded shadow bg-light"
        style={{ width: "90%", maxWidth: "600px" }}
      >
        <h2 className="mb-3">Tus Libros Favoritos</h2>
        {favoriteBooks.length === 0 ? (
          <p>No tienes libros en tus favoritos.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {favoriteBooks.map((book) => (
              <li key={book.id}>
                <div className="card mb-3">
                  <div className="card-body">
                    <h4 className="card-title">{book.volumeInfo.title}</h4>
                    {book.volumeInfo.authors && (
                      <p className="card-subtitle mb-2 text-muted">
                        De {book.volumeInfo.authors.join(", ")}
                      </p>
                    )}
                    {book.volumeInfo.description && (
                      <p className="card-text">{book.volumeInfo.description}</p>
                    )}
                    <button
                      onClick={() => removeFromFavorites(book.id)}
                      className="btn btn-outline-secondary btn-sm"
                    >
                      Quitar de Favoritos
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Link to="/search">
          <Button variant="primary" size="lg">
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Ir a la búsqueda
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Favorites;
