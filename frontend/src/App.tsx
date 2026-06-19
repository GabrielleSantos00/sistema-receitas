import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Ingredientes from './pages/Ingredientes';
import Receitas from './pages/Receitas';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/ingredientes" element={<Ingredientes />} />
          <Route path="/receitas" element={<Receitas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;