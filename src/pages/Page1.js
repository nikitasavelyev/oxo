import React from 'react';
import image from './images/stick1er.webp' // Импорт изображения

function Page1() {
  return (
    <div className="page-content">
      <h1>Если у тебя ещё нет головной боли</h1>
      <p>Тогда мы идём к вам!</p>
      
      {/* Отображаем картинку */}
      <img src={image} alt="Описание картинки" className="center-image" />
    </div>
  );
}

export default Page1;
