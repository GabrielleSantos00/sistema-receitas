import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">🍳 Sistema de Receitas</Link>
        <div className="navbar-nav">
          <Link className="nav-link text-white" to="/categorias">Categorias</Link>
          <Link className="nav-link text-white" to="/ingredientes">Ingredientes</Link>
          <Link className="nav-link text-white" to="/receitas">Receitas</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;