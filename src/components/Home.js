import React from 'react';
import { Link } from 'react-router-dom';
import { FaShippingFast, FaCreditCard, FaHeadset } from 'react-icons/fa';

function Home() {
    return (
        <div className="contenedor-principal">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                        <h1 className="display-4 mb-4">Bienvenido a Akatsuki</h1>
                        <p className="lead mb-4">
                            Descubre nuestra colección exclusiva de productos. Calidad y estilo en cada artículo que ofrecemos.
                        </p>
                        <Link to="/productos" className="btn btn-dark btn-lg">
                            Ver Productos
                        </Link>
                    </div>
                    <div className="col-md-6 text-center">
                        <img 
                            src={process.env.PUBLIC_URL + '/akatsuki.jpg'} 
                            alt="Akatsuki Collection" 
                            className="img-fluid rounded shadow"
                            style={{
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        />
                    </div>
                </div>

                <div className="row mt-5">
                    <h2 className="text-center mb-4">¿Por qué elegirnos?</h2>
                    <div className="col-md-4 text-center mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <FaShippingFast className="display-4 mb-3 text-primary" />
                                <h3>Envío Rápido</h3>
                                <p>Entrega rápida y segura a cualquier parte del país.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <FaCreditCard className="display-4 mb-3 text-primary" />
                                <h3>Pago Seguro</h3>
                                <p>Múltiples métodos de pago seguros y confiables.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <FaHeadset className="display-4 mb-3 text-primary" />
                                <h3>Atención 24/7</h3>
                                <p>Soporte al cliente disponible en todo momento.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home; 