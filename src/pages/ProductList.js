import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';

function ProductList() {
    const [searchParams] = useSearchParams();
    const busqueda = searchParams.get('buscar') || '';
    const [productos, setProductos] = useState([]);

    // Simulación de productos
    useEffect(() => {
        const todosLosProductos = [
            {
                id: 1,
                nombre: "Túnica Akatsuki",
                descripcion: "Túnica oficial de Akatsuki, diseño original con nubes rojas",
                precio: 89.99,
                imagen: "Túnica Akatsuki.jpg",
                categoria: "ropa"
            },
            {
                id: 2,
                nombre: "Mochila Akatsuki",
                descripcion: "Mochila espaciosa con diseño de nubes rojas, perfecta para ninjas",
                precio: 45.99,
                imagen: "Mochila Akatsuki.jpg",
                categoria: "accesorios"
            },
            {
                id: 3,
                nombre: "Sandalias Ninja",
                descripcion: "Sandalias tradicionales de ninja, estilo Akatsuki",
                precio: 34.99,
                imagen: "Sandalias Akatsuki.jpg",
                categoria: "calzado"
            },
            {
                id: 4,
                nombre: "Sombrero Akatsuki",
                descripcion: "Sombrero tradicional de paja con campanas, estilo Akatsuki",
                precio: 24.99,
                imagen: "Sombrero Akatsuki.jpg",
                categoria: "accesorios"
            },
            {
                id: 5,
                nombre: "Suéter Akatsuki",
                descripcion: "Suéter cálido con diseño de nubes rojas",
                precio: 49.99,
                imagen: "Suéter de nube Akatsuki.jpg",
                categoria: "ropa"
            },
            {
                id: 6,
                nombre: "Camiseta Akatsuki",
                descripcion: "Camiseta oficial con diseño de Akatsuki, material de alta calidad",
                precio: 29.99,
                imagen: "Camiseta de Akatsuki.jpg",
                categoria: "ropa"
            }
        ];

        // Filtrar productos según la búsqueda
        const productosFiltrados = busqueda
            ? todosLosProductos.filter(producto =>
                producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                producto.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
                producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
            )
            : todosLosProductos;

        setProductos(productosFiltrados);
    }, [busqueda]);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">
                {busqueda ? `Resultados para "${busqueda}"` : "Nuestros Productos"}
            </h1>
            {productos.length > 0 ? (
                <ProductCarousel productos={productos} />
            ) : (
                <div className="text-center py-5">
                    <h2>No se encontraron productos</h2>
                    <p className="text-muted">Intenta con otra búsqueda</p>
                </div>
            )}
        </div>
    );
}

export default ProductList; 