import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
import { useCurrency } from '../context/CurrencyContext';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
function ProductCarousel({ productos }) {
    const [indiceActual, setIndiceActual] = useState(0);
    const productosPorPagina = 3;
    const { formatearPrecio } = useCurrency();

    const siguienteSlide = () => {
        setIndiceActual((prevIndex) => 
            (prevIndex + 1) % Math.ceil(productos.length / productosPorPagina)
        );
    };

    const anteriorSlide = () => {
        setIndiceActual((prevIndex) => 
            (prevIndex - 1 + Math.ceil(productos.length / productosPorPagina)) % 
            Math.ceil(productos.length / productosPorPagina)
        );
    };

    const productosVisibles = productos.slice(
        indiceActual * productosPorPagina,
        (indiceActual + 1) * productosPorPagina
    );

    return (
        <div className="product-carousel position-relative">
            <div className="row">
                {productosVisibles.map((producto) => (
                    <div key={producto.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img 
                                src={producto.imagen} 
                                className="card-img-top" 
                                alt={producto.nombre}
                                style={{ 
                                    height: '200px', 
                                    objectFit: 'cover' 
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p className="card-text">
                                    <strong>{formatearPrecio(producto.precio)}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
                onClick={anteriorSlide}
                style={{ zIndex: 1 }}
            >
                &lt;
            </button>
            <button 
                className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
                onClick={siguienteSlide}
                style={{ zIndex: 1 }}
            >
                &gt;
            </button>
        </div>
    );
}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

export default ProductCarousel; 