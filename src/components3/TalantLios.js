import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TalantLios.css';

const TalantLios = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/');
  };

  return (
    <div className="dragon-web-app">
      <div className="header">
        <h1>Добро пожаловать в Спомогатор</h1>
        <h2>Таланты</h2>
      </div>
      <button onClick={handleNextClick} className="next-button">
        Далее
      </button>
    </div>
  );
};

export default TalantLios;
