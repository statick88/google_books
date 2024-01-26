// BookItem.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBook } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal/modalConfirm";

const BookItem = ({ book }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    const favorites = storedFavorites
      ? JSON.parse(storedFavorites)
      : { books: [] };
    setIsInFavorites(favorites.books.some((b) => b.id === book.id));
  }, [book]);

  const handleFavoriteClick = () => {
    isInFavorites ? setShowModal(true) : addBookToFavorites();
  };

  const addBookToFavorites = () => {
    const storedFavorites = localStorage.getItem("favorites");
    let favorites = storedFavorites
      ? JSON.parse(storedFavorites)
      : { expiry: null, books: [] };

    const now = new Date();
    if (!favorites.expiry || now.getTime() > favorites.expiry) {
      favorites.expiry = now.getTime() + 24 * 60 * 60 * 1000;
      favorites.books = [];
    }

    favorites.books.push(book);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsInFavorites(true);
  };

  const removeBookFromFavorites = () => {
    const storedFavorites = localStorage.getItem("favorites");
    let favorites = storedFavorites
      ? JSON.parse(storedFavorites)
      : { books: [] };

    favorites.books = favorites.books.filter((b) => b.id !== book.id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsInFavorites(false);
  };

  const priceInfo =
    book.saleInfo && book.saleInfo.listPrice
      ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`
      : "No disponible";

  return (
    <div className="card mb-3" style={{ position: "relative" }}>
      <div className="card-body">
        <h3 className="card-title">
          <FontAwesomeIcon icon={faBook} style={{ marginRight: "5px" }} />
          {book.volumeInfo.title}
        </h3>
        <h5 className="card-subtitle mb-2 text-muted">
          {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
        </h5>
        <p className="card-text">{book.volumeInfo.description}</p>
        <p className="card-text">
          <small>Precio: {priceInfo}</small>
        </p>
        {book.saleInfo.buyLink && (
          <a href={book.saleInfo.buyLink} className="btn btn-primary">
            Comprar
          </a>
        )}
        <button
          onClick={handleFavoriteClick}
          className={`btn ${
            isInFavorites ? "btn-secondary" : "btn-outline-secondary"
          } btn-sm`}
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <FontAwesomeIcon icon={faHeart} />
          Favorito
        </button>
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          removeBookFromFavorites();
          setShowModal(false);
        }}
      >
        <div>¿Deseas eliminar este libro de tus favoritos?</div>
      </Modal>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;
