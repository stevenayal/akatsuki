import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext';

function ProductCarousel({ productos }) {
    const [index, setIndex] = useState(0);
    const { addToCart } = useCart();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const handleAddToCart = (producto) => {
        addToCart(producto);
        toast.success(`${producto.nombre} agregado al carrito!`);
    };

    const productosPorPagina = 3;
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const productosActuales = productos.slice(
        index * productosPorPagina,
        (index + 1) * productosPorPagina
    );

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="mb-4">
            {Array.from({ length: totalPaginas }).map((_, pageIndex) => (
                <Carousel.Item key={pageIndex}>
                    <div className="d-flex justify-content-around">
                        {productosActuales.map((producto) => (
                            <div key={producto.id} className="text-center" style={{ width: '30%' }}>
                                <div className="d-flex justify-content-center">
                                    <img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        style={{
                                            maxHeight: '400px',
                                            objectFit: 'contain',
                                            width: '100%'
                                        }}
                                    />
                                </div>
                                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-2">
                                    <h5>{producto.nombre}</h5>
                                    <p className="mb-2">${producto.precio.toFixed(2)}</p>
                                    <Button
                                        variant="outline-light"
                                        size="sm"
                                        onClick={() => handleAddToCart(producto)}
                                    >
                                        Agregar al carrito
                                    </Button>
                                </Carousel.Caption>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ProductCarousel; 