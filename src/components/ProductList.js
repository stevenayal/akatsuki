import React from 'react';
import ProductCarousel from './ProductCarousel';

function ProductList() {
    const products = [
        {
            name: "akatsuki1",
            price: "$99.99",
            image: process.env.PUBLIC_URL + "/akatsuki1.jpg"
        },
        {
            name: "naruto2",
            price: "$149.99",
            image: process.env.PUBLIC_URL + "/naruto2.jpg"
        },
        {
            name: "nube3",
            price: "$139.99",
            image: process.env.PUBLIC_URL + "/nube3.jpg"
        },
        {
            name: "paint4",
            price: "$129.99",
            image: process.env.PUBLIC_URL + "/paint4.jpg"
        },
        {
            name: "uchiha5",
            price: "$119.99",
            image: process.env.PUBLIC_URL + "/uchiha5.jpg"
        },
        // ... más productos
    ];

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Lista de Productos</h2>
            <p className="text-center mb-4">Aquí encontrarás una lista de todos los productos disponibles.</p>
            <ProductCarousel products={products} />
        </div>
    );
}

export default ProductList; 