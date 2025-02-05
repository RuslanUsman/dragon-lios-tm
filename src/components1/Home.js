// src/components/Home.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faBriefcase, faShoppingCart, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Добро пожаловать на наш сайт!</h1>
      <p className="text-center mb-5">Здесь вы найдете блог, портфолио, интернет-магазин и новости.</p>
      <div className="row">
        <div className="col-md-3" data-aos="fade-up">
          <div className="card text-center">
            <div className="card-body">
              <FontAwesomeIcon icon={faBlog} size="2x" className="mb-3" />
              <h5 className="card-title">Блог</h5>
              <p className="card-text">Здесь будут статьи и посты.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
          <div className="card text-center">
            <div className="card-body">
              <FontAwesomeIcon icon={faBriefcase} size="2x" className="mb-3" />
              <h5 className="card-title">Портфолио</h5>
              <p className="card-text">Здесь будут примеры наших работ.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
          <div className="card text-center">
            <div className="card-body">
              <FontAwesomeIcon icon={faShoppingCart} size="2x" className="mb-3" />
              <h5 className="card-title">Интернет-магазин</h5>
              <p className="card-text">Здесь будут товары и корзина.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
          <div className="card text-center">
            <div className="card-body">
              <FontAwesomeIcon icon={faNewspaper} size="2x" className="mb-3" />
              <h5 className="card-title">Новости</h5>
              <p className="card-text">Здесь будут последние обновления.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
