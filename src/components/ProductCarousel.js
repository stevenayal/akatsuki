import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

function ProductCarousel({ productos }) {
    const [indiceActual, setIndiceActual] = useState(0);
    const productosPorPagina = 3;
    const { formatearPrecio } = useCurrency();
    const { addToCart } = useCart();

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

    const handleAddToCart = (producto) => {
        addToCart(producto);
        toast.success(`${producto.nombre} agregado al carrito!`, {
            position: "bottom-right",
            autoClose: 2000
        });
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
                        <div className="card h-100" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
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
                                <button 
                                    className="btn btn-dark w-100"
                                    onClick={() => handleAddToCart(producto)}
                                >
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {productos.length > productosPorPagina && (
                <>
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
                </>
            )}
        </div>
    );
}

export default ProductCarousel; 