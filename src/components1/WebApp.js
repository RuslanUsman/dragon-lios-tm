// src/components/WebApp.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WebApp.css';

const WebApp = () => {
  const navigate = useNavigate();

  return (
    <div className="webapp-container">
      <iframe
        src="https://ruslanusman.github.io/dragon-web-app/"
        title="Web App"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      ></iframe>
      <div className="webapp-footer">
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    </div>
  );
};

export default WebApp;
