// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import PaginaPrincipal from './pages/paginaPrincipal';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paginaPrincipal" element={<PaginaPrincipal />} />
        </Routes>
    </Router>
  );
}

export default App;
