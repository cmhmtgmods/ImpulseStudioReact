'use client';

import React, { useState } from 'react';

const Map = ({ location = { name: 'Бургас, Болгария', center: { lat: 42.5048, lng: 27.4626 } } }) => {
  // Поскольку мы не можем использовать Google Maps API без ключа, 
  // создадим компонент, который отображает статическую карту
  
  return (
    <div className="overflow-hidden rounded-lg border border-dark-surface-2/50 h-[300px] relative dark:border-dark-surface-2/50 light:border-light-gray/10">
      {/* Фейковая карта с градиентным фоном */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-surface to-dark-surface-2 dark:from-dark-surface dark:to-dark-surface-2 light:from-light-surface light:to-light-surface-2">
        {/* Сетка, имитирующая карту */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}></div>
        
        {/* Дороги */}
        <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-dark-gray/20 transform -translate-y-1/2"></div>
        <div className="absolute top-0 bottom-0 left-1/3 w-[3px] bg-dark-gray/20"></div>
        <div className="absolute top-0 bottom-0 left-2/3 w-[3px] bg-dark-gray/20"></div>
        <div className="absolute top-1/4 left-0 right-0 h-[2px] bg-dark-gray/10"></div>
        <div className="absolute top-3/4 left-0 right-0 h-[2px] bg-dark-gray/10"></div>
        
        {/* Маркер местоположения */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Пульсирующий круг */}
          <div className="absolute w-16 h-16 bg-primary/20 rounded-full animate-ping"></div>
          <div className="absolute w-12 h-12 bg-primary/30 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Маркер */}
          <div className="absolute w-6 h-6 bg-primary rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Название местоположения */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-dark-surface-2 px-4 py-2 rounded-full shadow-md border border-dark-surface-2/50 text-dark-white text-sm dark:bg-dark-surface-2 dark:border-dark-surface-2/50 dark:text-dark-white light:bg-light-surface light:border-light-gray/20 light:text-light-black">
          {location.name}
        </div>
      </div>
      
      {/* Уведомление о карте */}
      <div className="absolute bottom-4 left-4 right-4 bg-dark-surface-2/80 backdrop-blur-sm py-2 px-4 rounded-md text-xs text-dark-gray dark:bg-dark-surface-2/80 dark:text-dark-gray light:bg-light-surface/80 light:text-light-gray">
        <p>Это стилизованное представление карты. В реальном проекте здесь будет интерактивная карта Google Maps или OpenStreetMap.</p>
      </div>
    </div>
  );
};

export default Map;