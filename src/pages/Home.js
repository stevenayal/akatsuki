import React from 'react';
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import { motion } from 'framer-motion';

function Home() {
    // Datos de ejemplo para el carrusel
    const productosDestacados = [
        {
            id: 1,
            nombre: "Túnica Akatsuki",
            descripcion: "Túnica oficial de Akatsuki, diseño original con nubes rojas",
            precio: 89.99,
            imagen: "Túnica Akatsuki.jpg"
        },
        {
            id: 2,
            nombre: "Mochila Akatsuki",
            descripcion: "Mochila espaciosa con diseño de nubes rojas, perfecta para ninjas",
            precio: 45.99,
            imagen: "Mochila Akatsuki.jpg"
        },
        {
            id: 3,
            nombre: "Camiseta Akatsuki",
            descripcion: "Camiseta oficial con diseño de Akatsuki, material de alta calidad",
            precio: 29.99,
            imagen: "Camiseta de Akatsuki.jpg"
        },
        {
            id: 4,
            nombre: "Suéter Akatsuki",
            descripcion: "Suéter cálido con diseño de nubes rojas",
            precio: 49.99,
            imagen: "Suéter de nube Akatsuki.jpg"
        }
    ];

    return (
        <div className="container py-5">
            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center text-md-start">
                    <motion.h1 
                        className="display-4 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Bienvenido a Akatsuki Shop
                    </motion.h1>
                    <motion.p 
                        className="lead mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Descubre nuestra colección exclusiva de ropa y accesorios Akatsuki.
                        Viste como un verdadero miembro de la organización.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Link to="/productos" className="btn btn-danger btn-lg">
                            Ver Productos
                        </Link>
                    </motion.div>
                </div>
                <motion.div 
                    className="col-md-6 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={process.env.PUBLIC_URL + '/logo/logo_pain.jpg'}
                        alt="Logo Pain"
                        className="img-fluid rounded shadow"
                        style={{ 
                            maxHeight: '500px',
                            width: 'auto',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))'
                        }}
                    />
                </motion.div>
            </div>

            <motion.section 
                className="mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h2 className="text-center mb-4">Productos Destacados</h2>
                <ProductCarousel productos={productosDestacados} />
            </motion.section>

            <motion.section 
                className="py-5 bg-light rounded-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <div className="container">
                    <h2 className="text-center mb-5">¿Por qué elegirnos?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="fas fa-shipping-fast fa-3x mb-3 text-danger"></i>
                                    <h3 className="h5">Envío Rápido</h3>
                                    <p className="text-muted">Entrega en todo el país en 24-48 horas</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="fas fa-shield-alt fa-3x mb-3 text-danger"></i>
                                    <h3 className="h5">Calidad Garantizada</h3>
                                    <p className="text-muted">Productos oficiales de la más alta calidad</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="fas fa-headset fa-3x mb-3 text-danger"></i>
                                    <h3 className="h5">Soporte 24/7</h3>
                                    <p className="text-muted">Atención al cliente disponible todo el día</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

export default Home; 