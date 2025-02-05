// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './components1/Home';
import Blog from './components1/Blog';
import Portfolio from './components1/Portfolio';
import Shop from './components1/Shop';
import News from './components1/News';
import MainMenuu from './components2/MainMenu';
import MaterialSelection from './components2/MaterialSelection';
import ConstructionSelection from './components2/ConstructionSelection';
import Result from './components2/Result';
import DragonWebApp from './components2/DragonWebApp';

import CalculatorExplosion from './components/CalculatorExplosion'; // Обновленный путь
import MainMenu from './components/MainMenu';
import Results from './components/Results';

import MainMenutal from './components3/MainMenu';
import Instinct from './components3/Instinct';
import Intellect from './components3/Intellect';
import Fight from './components3/Fight';
import PriceList from './components3/PriceList';
import TalantLios from './components3/TalantLios';

import './App.css';

const MainContent = () => {
  const location = useLocation();

  const showFooter = !['/dragon-web-app', '/main-menu', '/materials', '/construction', '/result', '/menu', '/calculator-explosion', '/results', '/tal', '/instinct', '/intellect', '/fight', '/pricelist', '/talant-lios'].includes(location.pathname);

  return (
    <>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/news" element={<News />} />

          <Route path="/dragon-web-app" element={<DragonWebApp />} />
          <Route path="/main-menu" element={<MainMenuu />} />
          <Route path="/materials" element={<MaterialSelection />} />
          <Route path="/construction" element={<ConstructionSelection />} />
          <Route path="/result" element={<Result />} />

          <Route path="/menu" element={<MainMenu />} />
          <Route path="/calculator-explosion" element={<CalculatorExplosion />} />
          <Route path="/results" element={<Results />} />

          <Route path="/tal" element={<MainMenutal />} />
          <Route path="/instinct" element={<Instinct />} />
          <Route path="/intellect" element={<Intellect />} />
          <Route path="/fight" element={<Fight />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/talant-lios" element={<TalantLios />} />
        </Routes>
      </main>
      {showFooter && (
        <footer>
          <p>© 2025 Dragon. Все права защищены.</p>
          <div className="footer-buttons">
            <Link to="/main-menu">
              <button className="animated-button">Калькулятор рейда</button>
            </Link>
            <Link to="/menu">
              <button className="animated-button">Калькулятор взрыва</button>
            </Link>
            <Link to="/tal">
              <button className="animated-button">Таланты и их пробуждение</button>
            </Link>
          </div>
        </footer>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <Link to="/">Главная</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/portfolio">Портфолио</Link>
            <Link to="/shop">Интернет-магазин</Link>
            <Link to="/news">Новости</Link>
          </nav>
        </header>
        <MainContent />
      </div>
    </Router>
  );
};

export default App;


