import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = ({ products }) => {
  return (
    <Carousel className="mb-4">
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            <img
              className="d-block"
              src={product.image}
              alt={product.name}
              style={{
                maxHeight: '400px',
                objectFit: 'contain'
              }}
            />
          </div>
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel; 