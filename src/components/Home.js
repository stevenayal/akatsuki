import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';

function Home() {
    return (
        <div className="home-container">
            <div className="row align-items-center min-vh-75">
                <div className="col-md-6 text-center text-md-start">
                    <h1 className="display-4 fw-bold mb-4">Bienvenido a Akatsuki</h1>
                    <p className="lead mb-4">
                        Descubre nuestra colección exclusiva de productos. 
                        Calidad y estilo en cada artículo que ofrecemos.
                    </p>
                    <Link to="/productos" className="btn btn-dark btn-lg">
                        <FaShoppingBag className="me-2" />
                        Ver Productos
                    </Link>
                </div>
                <div className="col-md-6 text-center">
                    <div className="logo-container mb-4">
                        <img 
                            src={process.env.PUBLIC_URL + '/akatsuki.jpg'} 
                            alt="Logo Akatsuki" 
                            className="img-fluid"
                            style={{
                                width: '500px',
                                height: '250px',
                                objectFit: 'cover',
                                border: '4px solid #343a40',
                                boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                                borderRadius: '250px 250px 250px 250px / 125px 125px 125px 125px'
                            }}
                        />
                    </div>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-12">
                    <h2 className="text-center mb-4">¿Por qué elegirnos?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <h3 className="h5">Calidad Premium</h3>
                                    <p>Productos seleccionados con los más altos estándares de calidad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <h3 className="h5">Envío Rápido</h3>
                                    <p>Entrega rápida y segura a cualquier parte del país.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <h3 className="h5">Atención Personalizada</h3>
                                    <p>Servicio al cliente de primera calidad para ayudarte en todo momento.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home; 