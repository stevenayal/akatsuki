import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';

function Home() {
    return (
        <div className="home-container" style={{
            background: 'linear-gradient(to bottom, #DC143C, #000000)',
            minHeight: '100vh',
            color: 'white',
            padding: '20px'
        }}>
            <div className="row align-items-center min-vh-75">
                <div className="col-md-6 text-center text-md-start">
                    <h1 className="display-4 fw-bold mb-4" style={{ color: 'white' }}>
                        Bienvenido a Akatsuki
                    </h1>
                    <p className="lead mb-4" style={{ color: 'white' }}>
                        Descubre nuestra colección exclusiva de productos. 
                        Calidad y estilo en cada artículo que ofrecemos.
                    </p>
                    <Link to="/productos" className="btn btn-light btn-lg">
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
                                border: '4px solid #fff',
                                boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                                borderRadius: '250px 250px 250px 250px / 125px 125px 125px 125px'
                            }}
                        />
                    </div>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-12">
                    <h2 className="text-center mb-4" style={{ color: 'white' }}>¿Por qué elegirnos?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100" style={{
                                background: 'linear-gradient(to bottom, #DC143C, #000000)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 0 15px rgba(0,0,0,0.3)'
                            }}>
                                <div className="card-body text-center">
                                    <h3 className="h5" style={{ color: 'white' }}>Calidad Premium</h3>
                                    <p style={{ color: 'white' }}>Productos seleccionados con los más altos estándares de calidad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100" style={{
                                background: 'linear-gradient(to bottom, #DC143C, #000000)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 0 15px rgba(0,0,0,0.3)'
                            }}>
                                <div className="card-body text-center">
                                    <h3 className="h5" style={{ color: 'white' }}>Envío Rápido</h3>
                                    <p style={{ color: 'white' }}>Entrega rápida y segura a cualquier parte del país.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100" style={{
                                background: 'linear-gradient(to bottom, #DC143C, #000000)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 0 15px rgba(0,0,0,0.3)'
                            }}>
                                <div className="card-body text-center">
                                    <h3 className="h5" style={{ color: 'white' }}>Atención Personalizada</h3>
                                    <p style={{ color: 'white' }}>Servicio al cliente de primera calidad para ayudarte en todo momento.</p>
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