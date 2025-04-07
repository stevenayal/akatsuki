import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { toast } from 'react-toastify';

function ProductCarousel({ productos }) {
    const [indiceActual, setIndiceActual] = useState(0);
    const productosPorPagina = 4;
    const { addToCart } = useCart();
    const { moneda, convertirPrecio } = useCurrency();

    // Función para manejar errores de carga de imagen
    const handleImageError = (e) => {
        e.target.src = process.env.PUBLIC_URL + '/akatsuki.jpg'; // Imagen de respaldo si falla la carga
    };

    const siguienteSlide = () => {
        setIndiceActual((prevIndice) => 
            prevIndice + productosPorPagina >= productos.length ? 0 : prevIndice + productosPorPagina
        );
    };

    const anteriorSlide = () => {
        setIndiceActual((prevIndice) => 
            prevIndice - productosPorPagina < 0 ? 
            Math.floor((productos.length - 1) / productosPorPagina) * productosPorPagina : 
            prevIndice - productosPorPagina
        );
    };

    const handleAddToCart = (producto) => {
        addToCart(producto);
        toast.success('¡Producto agregado al carrito!');
    };

    if (!productos || productos.length === 0) {
        return <div className="text-center py-5">No hay productos disponibles</div>;
    }

    const productosActuales = productos.slice(indiceActual, indiceActual + productosPorPagina);

    return (
        <div className="product-carousel position-relative py-4">
            <div className="container">
                <div className="row">
                    {productosActuales.map((producto, index) => (
                        <div key={producto.id || index} className="col-12 col-sm-6 col-lg-3 mb-4">
                            <div className="tarjeta-producto bg-white rounded h-100">
                                <div className="position-relative">
                                    <img
                                        src={process.env.PUBLIC_URL + '/productos/' + producto.imagen}
                                        alt={producto.nombre}
                                        className="imagen-tarjeta"
                                        onError={handleImageError}
                                    />
                                </div>
                                <div className="cuerpo-tarjeta">
                                    <h5 className="titulo-tarjeta">{producto.nombre}</h5>
                                    <p className="texto-tarjeta texto-gris mb-2">
                                        {producto.descripcion}
                                    </p>
                                    <div className="mt-auto">
                                        <p className="texto-tarjeta texto-primario fw-bold mb-2">
                                            {convertirPrecio(producto.precio, moneda)}
                                        </p>
                                        <button
                                            className="btn btn-dark w-100"
                                            onClick={() => handleAddToCart(producto)}
                                        >
                                            <FaShoppingCart className="me-2" />
                                            Agregar al carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {productos.length > productosPorPagina && (
                <>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        onClick={anteriorSlide}
                        style={{
                            width: '40px',
                            background: 'rgba(0,0,0,0.5)',
                            border: 'none',
                            borderRadius: '0 4px 4px 0'
                        }}
                    >
                        <FaChevronLeft className="text-white" />
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        onClick={siguienteSlide}
                        style={{
                            width: '40px',
                            background: 'rgba(0,0,0,0.5)',
                            border: 'none',
                            borderRadius: '4px 0 0 4px'
                        }}
                    >
                        <FaChevronRight className="text-white" />
                    </button>
                </>
            )}
        </div>
    );
}

export default ProductCarousel; 