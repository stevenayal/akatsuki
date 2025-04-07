import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <div className="container py-5">
            <motion.div 
                className="text-center mb-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="display-4 mb-4">Sobre Nosotros</h1>
                <motion.div 
                    className="mb-5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={process.env.PUBLIC_URL + '/logo/akatsuki-group-jerri-tointon.jpg'}
                        alt="Akatsuki Group"
                        className="img-fluid rounded shadow-lg"
                        style={{ 
                            maxWidth: '100%',
                            height: 'auto',
                            maxHeight: '600px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.4))'
                        }}
                    />
                </motion.div>
            </motion.div>

            <motion.div 
                className="row g-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="col-lg-8 mx-auto">
                    <div className="bg-light p-4 rounded-3 shadow-sm">
                        <h2 className="text-center mb-4">Nuestra Historia</h2>
                        <p className="lead text-muted">
                            Somos una tienda especializada en productos de Akatsuki, dedicada a traer la más alta calidad en ropa y accesorios para los verdaderos fans de Naruto.
                        </p>
                        <p className="text-muted">
                            Nuestra misión es proporcionar a nuestros clientes productos auténticos y de alta calidad que representen fielmente el estilo y la esencia de Akatsuki. Cada artículo en nuestra tienda es cuidadosamente seleccionado para garantizar la mejor experiencia para nuestros clientes.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className="row mt-5 g-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div className="col-lg-8 mx-auto">
                    <div className="bg-light p-4 rounded-3 shadow-sm">
                        <h2 className="text-center mb-4">Nuestro Compromiso</h2>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <i className="fas fa-check text-danger me-2"></i>
                                Productos de alta calidad
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-check text-danger me-2"></i>
                                Atención al cliente excepcional
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-check text-danger me-2"></i>
                                Envíos seguros y rápidos
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-check text-danger me-2"></i>
                                Garantía de satisfacción
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default About; 