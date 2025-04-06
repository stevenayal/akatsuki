import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = ({ products }) => {
  return (
    <Carousel className="mb-4" style={{ backgroundColor: '#DC143C' }}>
      {products.map((product, index) => (
        <Carousel.Item key={index} style={{ backgroundColor: '#DC143C' }}>
          <div className="d-flex justify-content-center" style={{ backgroundColor: '#DC143C' }}>
            <img
              className="d-block"
              src={product.image}
              alt={product.name}
              style={{
                maxHeight: '400px',
                objectFit: 'contain',
                backgroundColor: '#DC143C'
              }}
            />
          </div>
          <Carousel.Caption className="bg-dark bg-opacity-75 rounded">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel; 