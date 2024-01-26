import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navStyle = {
    margin: "10px 0",
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    margin: "0 10px",
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h1>Tu Libro Favorito</h1>
        <nav
          className="navbar navbar-expand-lg"
          style={{ textAlign: "center" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" style={linkStyle} className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search" style={linkStyle} className="nav-link">
                  Buscar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favoritos" style={linkStyle} className="nav-link">
                  Lista de Favoritos
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
