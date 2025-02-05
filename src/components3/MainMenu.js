import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

function MainMenu() {
  return (
    <div className="MainMenu">
      <h2>Пробуждение талантов</h2>
      <div className="talentsmenu">
        <div className="talentmenu">
          <img src={`${process.env.PUBLIC_URL}/images/instinkt.jpg`} alt="Инстинкт" />
          <h2>Инстинкт</h2>
          <Link to="/instinct">
            <button>Подробнее</button>
          </Link>
        </div>
        <div className="talentmenu">
          <img src={`${process.env.PUBLIC_URL}/images/inellect.jpg`} alt="Интеллект" />
          <h2>Интеллект</h2>
          <Link to="/intellect">
            <button>Подробнее</button>
          </Link>
        </div>
        <div className="talentmenu">
          <img src={`${process.env.PUBLIC_URL}/images/Boy.jpg`} alt="Бой" />
          <h2>Бой</h2>
          <Link to="/fight">
            <button>Подробнее</button>
          </Link>
        </div>
        <div className="talentmenu">
          <img src={`${process.env.PUBLIC_URL}/images/PriseList.jpg`} alt="Прайс лист" />
          <h2>Прайс лист</h2>
          <Link to="/pricelist">
            <button>Подробнее</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;





