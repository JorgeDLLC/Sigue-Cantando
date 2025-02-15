import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  // Manejo del scroll para ocultar y mostrar la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Ocultar navbar al hacer scroll hacia abajo
      } else {
        setVisible(true); // Mostrar navbar al hacer scroll hacia arriba
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        !(event.target as HTMLElement).closest(".menu-button, .sidebar")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const paragraphs = document.querySelectorAll("p");
      paragraphs.forEach((paragraph) => {
        if (
          paragraph.textContent
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())
        ) {
          paragraph.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  };

  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      {/* Botón del menú en móviles */}
      <button
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Título de la navbar */}
      <h1 className="navbar-title">Sigue Cantandooo</h1>

      {/* Sección de enlaces en escritorio, menú en móviles */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#CoplasBasiconas">Básiconas</a>
        </li>
        <li>
          <a href="#CoplasAtrevidas">Atrevidas</a>
        </li>
        <li>
          <a href="#ContrapuntoMujeres">Mujeres</a>
        </li>
        <li>
          <a href="#ContrapuntoHombres">Hombres</a>
        </li>
      </ul>

      {/* Icono de búsqueda en móviles */}
      <button
        className="search-icon"
        onClick={() => setShowSearch(!showSearch)}
      >
        🔍
      </button>

      {/* Buscador */}
      <div className={`navbar-search ${showSearch ? "active" : ""}`}>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleSearchSubmit}
          className="search-input"
        />
      </div>
    </nav>
  );
};

export default Navbar;
