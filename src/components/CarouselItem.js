import React from 'react';
import './Carousel.css';

const CarouselItem = ({ item }) => {
  return (
    <div className='carousel-item'>
      <div className='image-container'>
        <img src={item.icon} alt={item.title} />
      </div>
      <div className='description'>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
