import React, { useState } from 'react';
import './FlipCards.css'; // Подключаем стили для карточек

const WorkFormatsSection = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const cards = [
    {
      title: 'Fixed Price',
      description: 'Для проектов с фиксированными сроками и бюджетом',
      details: 'Фиксированная стоимость по согласованным условиям.',
    },
    {
      title: 'Time & Material',
      description: 'Для гибкого планирования длинных и сложных проектов',
      details: 'Оплата по фактически затраченным времени и материалам.',
    },
    {
      title: 'Retainer',
      description: 'Выделенная команда с настроенными процессами',
      details: 'Ежемесячная оплата за выделенную команду.',
    },
    {
      title: 'Outstaff',
      description: 'Усилим вашу команду нашими специалистами',
      details: 'Специалисты работают в вашем коллективе, как часть команды.',
    },
  ];

  return (
    <div className="work-formats-section">
      <h2>Форматы работы</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flippedIndex === index ? 'flipped' : ''}`}
            onMouseEnter={() => handleFlip(index)}
            onMouseLeave={() => handleFlip(null)}
          >
            <div className="card-front">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
            <div className="card-back">
              <p>{card.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFormatsSection;
