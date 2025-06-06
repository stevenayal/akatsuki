import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCarousel from './ProductCarousel';

function ProductList() {
    const [searchParams] = useSearchParams();
    const terminoBusqueda = searchParams.get('buscar')?.toLowerCase();

    const productos = [
        {
            id: 1,
            nombre: 'Akatsuki Cloud Sweater',
            precio: 49.99,
            descripcion: 'Sweater con el símbolo de la nube de Akatsuki. Perfecto para climas fríos.',
            imagen: process.env.PUBLIC_URL + '/Suéter de nube Akatsuki.jpg',
            categoria: 'Ropa'
        },
        {
            id: 2,
            nombre: 'Akatsuki Robe',
            precio: 89.99,
            descripcion: 'Robe negro con nubes rojas de Akatsuki. Ideal para cosplay o uso casual.',
            imagen: process.env.PUBLIC_URL + '/Túnica Akatsuki.webp',
            categoria: 'Ropa'
        },
        {
            id: 3,
            nombre: 'Akatsuki Hat',
            precio: 29.99,
            descripcion: 'Gorro con el símbolo de la nube de Akatsuki. Ajustable y cómodo.',
            imagen: process.env.PUBLIC_URL + '/Sombrero Akatsuki.jpg',
            categoria: 'Accesorios'
        },
        {
            id: 4,
            nombre: 'Akatsuki T-Shirt',
            precio: 24.99,
            descripcion: 'Camiseta con el diseño clásico de Akatsuki. 100% algodón.',
            imagen: process.env.PUBLIC_URL + '/Camiseta de Akatsuki.jpg',
            categoria: 'Ropa'
        },
        {
            id: 5,
            nombre: 'Akatsuki Sandals',
            precio: 39.99,
            descripcion: 'Sandalias con el símbolo de Akatsuki. Cómodas y duraderas.',
            imagen: process.env.PUBLIC_URL + '/Sandalias Akatsuki.jpg',
            categoria: 'Calzado'
        },
        {
            id: 6,
            nombre: 'Akatsuki Backpack',
            precio: 59.99,
            descripcion: 'Mochila con el diseño de Akatsuki. Resistente y espaciosa.',
            imagen: process.env.PUBLIC_URL + '/Mochila Akatsuki.jpg',
            categoria: 'Accesorios'
        }
    ];

    const productosFiltrados = terminoBusqueda
        ? productos.filter(producto => 
            producto.nombre.toLowerCase().includes(terminoBusqueda) ||
            producto.descripcion.toLowerCase().includes(terminoBusqueda) ||
            producto.categoria.toLowerCase().includes(terminoBusqueda)
        )
        : productos;

    return (
        <div className="container mt-4" style={{
            backgroundColor: '#DC143C',
            borderRadius: '8px',
            padding: '20px'
        }}>
            <h2 className="text-center mb-4" style={{ color: 'white' }}>
                {terminoBusqueda 
                    ? `Resultados de búsqueda para "${terminoBusqueda}"`
                    : "Nuestros Productos"
                }
            </h2>
            {productosFiltrados.length > 0 ? (
                <ProductCarousel productos={productosFiltrados} />
            ) : (
                <div className="text-center" style={{ color: 'white' }}>
                    <p>No se encontraron productos que coincidan con tu búsqueda.</p>
                    <p>Intenta con otros términos o navega por nuestras categorías.</p>
                </div>
            )}
        </div>
    );
}

export default ProductList; 