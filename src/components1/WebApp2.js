// src/components/WebApp2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebApp2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Web App 2</h1>
      <p>Это Web App 2.</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};

export default WebApp2;
