import React from 'react';
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import { motion } from 'framer-motion';
import { FaStar, FaCreditCard, FaHeadset } from 'react-icons/fa';

function Home() {
    // Datos de ejemplo para el carrusel
    const productosDestacados = [
        {
            id: 1,
            nombre: "Túnica Akatsuki",
            descripcion: "Túnica oficial de Akatsuki, diseño original con nubes rojas",
            precio: 89.99,
            imagen: process.env.PUBLIC_URL + "/Túnica Akatsuki.webp"
        },
        {
            id: 2,
            nombre: "Mochila Akatsuki",
            descripcion: "Mochila espaciosa con diseño de nubes rojas, perfecta para ninjas",
            precio: 45.99,
            imagen: process.env.PUBLIC_URL + "/Mochila Akatsuki.jpg"
        },
        {
            id: 3,
            nombre: "Camiseta Akatsuki",
            descripcion: "Camiseta oficial con diseño de Akatsuki, material de alta calidad",
            precio: 29.99,
            imagen: process.env.PUBLIC_URL + "/Camiseta de Akatsuki.jpg"
        },
        {
            id: 4,
            nombre: "Suéter Akatsuki",
            descripcion: "Suéter cálido con diseño de nubes rojas",
            precio: 49.99,
            imagen: process.env.PUBLIC_URL + "/Suéter de nube Akatsuki.jpg"
        }
    ];

    return (
        <div style={{
            backgroundColor: '#DC143C',
            minHeight: '100vh',
            color: 'white'
        }}>
            <div className="container py-5">
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 text-center text-md-start">
                        <motion.h1 
                            className="display-4 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Bienvenido a Akatsuki Store
                        </motion.h1>
                        <motion.p 
                            className="lead mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Descubre nuestra colección exclusiva de productos inspirados en el universo de Naruto.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Link to="/productos" className="btn btn-light btn-lg">
                                Ver Productos
                            </Link>
                        </motion.div>
                    </div>
                    <div className="col-md-6">
                        <motion.img
                            src={process.env.PUBLIC_URL + "/logo.png"}
                            alt="Akatsuki Logo"
                            className="img-fluid"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        />
                    </div>
                </div>

                <motion.div
                    className="row mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="col-md-4 mb-4">
                        <div className="text-center">
                            <FaStar className="display-4 mb-3" />
                            <h3>Productos Exclusivos</h3>
                            <p>Diseños únicos y de alta calidad</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="text-center">
                            <FaCreditCard className="display-4 mb-3" />
                            <h3>Pago Seguro</h3>
                            <p>Múltiples métodos de pago</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="text-center">
                            <FaHeadset className="display-4 mb-3" />
                            <h3>Soporte 24/7</h3>
                            <p>Atención al cliente personalizada</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <h2 className="text-center mb-4">Productos Destacados</h2>
                    <ProductCarousel productos={productosDestacados} />
                </motion.div>
            </div>
        </div>
    );
}

export default Home; 