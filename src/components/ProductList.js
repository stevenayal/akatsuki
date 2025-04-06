import React from 'react';
import ProductCarousel from './components/ProductCarousel';

function ProductList() {
    const products = [
        {
            name: "Producto 1",
            price: "$99.99",
            image: "/products/producto1.jpg"
        },
        {
            name: "Producto 2",
            price: "$149.99",
            image: "/ruta/a/imagen2.jpg"
        },
        {
            name: "Producto 3",
            price: "$139.99",
            image: "/ruta/a/imagen2.jpg"
        },
        {
            name: "Producto 4",
            price: "$129.99",
            image: "/ruta/a/imagen2.jpg"
        },
        {
            name: "Producto 5",
            price: "$119.99",
            image: "/ruta/a/imagen2.jpg"
        },
        // ... más productos
    ];

    return (
        <div>
            <h2>Lista de Productos</h2>
            <p>Aquí encontrarás una lista de todos los productos disponibles.</p>
            <ProductCarousel products={products} />
        </div>
    );
}

export default ProductList; 