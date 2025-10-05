// News.jsx - Componente para mostrar el apartado de noticias

import React from 'react';
import './News.css'; // Estilos para el componente

const News = ({ news }) => {
  return (
    <div className="news-section">
      <h2>Últimas Noticias</h2>
      <div className="news-list">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-description">{item.description}</p>
              <span className="news-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;