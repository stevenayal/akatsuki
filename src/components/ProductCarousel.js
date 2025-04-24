import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { toast } from 'react-toastify';
import styled from 'styled-components';

// Componente estilizado para la tarjeta de producto
const ProductCard = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #eee;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
`;

// Componente estilizado para la imagen
const ProductImage = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
    background-color: #f8f9fa;
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 10px;
        transition: transform 0.3s ease;
    }
    
    &:hover img {
        transform: scale(1.05);
    }
`;

// Componente estilizado para el cuerpo de la tarjeta
const ProductBody = styled.div`
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

function ProductCarousel({ productos }) {
    const [indiceActual, setIndiceActual] = useState(0);
    const productosPorPagina = 4;
    const { addToCart } = useCart();
    const { moneda, convertirPrecio } = useCurrency();

    // Función para manejar errores de carga de imagen
    const handleImageError = (e) => {
        e.target.src = process.env.PUBLIC_URL + '/akatsuki.jpg';
        e.target.onerror = null; // Prevenir bucle infinito
    };

    // Función para obtener la ruta correcta de la imagen
    const getImagePath = (imagen) => {
        if (imagen.startsWith('http')) {
            return imagen;
        }
        return process.env.PUBLIC_URL + '/productos/' + imagen;
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
                <div className="row g-4">
                    {productosActuales.map((producto, index) => (
                        <div key={producto.id || index} className="col-12 col-sm-6 col-lg-3">
                            <ProductCard>
                                <ProductImage>
                                    <img
                                        src={getImagePath(producto.imagen)}
                                        alt={producto.nombre}
                                        onError={handleImageError}
                                        loading="lazy"
                                    />
                                </ProductImage>
                                <ProductBody>
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
                                </ProductBody>
                            </ProductCard>
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
                            height: '40px',
                            background: 'rgba(0,0,0,0.5)',
                            border: 'none',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '50%',
                            left: '10px',
                            transform: 'translateY(-50%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
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
                            height: '40px',
                            background: 'rgba(0,0,0,0.5)',
                            border: 'none',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '50%',
                            right: '10px',
                            transform: 'translateY(-50%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
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