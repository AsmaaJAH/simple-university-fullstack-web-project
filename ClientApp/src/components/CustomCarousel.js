import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomCarousel.css';

const CustomCarousel = () => {
  return (
    <div className="custom-carousel-container">
      <Carousel indicators={true} controls={true} interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100 custom-carousel-image" src="photo1.jpg" alt="Campus" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-carousel-image" src="photo2.jpg" alt="Campus" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-carousel-image" src="photo3.jpg" alt="Campus" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-carousel-image" src="photo4.jpg" alt="Campus" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-carousel-image" src="photo5.jpg" alt="Campus" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-carousel-image" src="photo6.jfif" alt="Campus" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
