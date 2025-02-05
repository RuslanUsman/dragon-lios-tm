// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3">Мой Сайт</h1>
        <nav>
          <Link to="/" className="text-white mx-2">Главная</Link>
          <Link to="/blog" className="text-white mx-2">Блог</Link>
          <Link to="/portfolio" className="text-white mx-2">Портфолио</Link>
          <Link to="/shop" className="text-white mx-2">Интернет-магазин</Link>
          <Link to="/news" className="text-white mx-2">Новости</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
