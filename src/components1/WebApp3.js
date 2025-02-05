// src/components/WebApp3.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebApp3 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Web App 3</h1>
      <p>Это Web App 3.</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};

export default WebApp3;
