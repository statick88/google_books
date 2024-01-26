import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="mt-5 p-4 border rounded shadow bg-light"
        style={{ width: "90%", maxWidth: "600px" }}
      >
        <h2 className="mb-3">Bienvenido</h2>
        <p className="lead mb-4">
          Bienvenido a la página principal. Puedes navegar a la página de
          búsqueda utilizando el enlace de abajo.
        </p>

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

export default Home;
