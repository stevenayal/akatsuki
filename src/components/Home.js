import React from 'react';
import { Link } from 'react-router-dom';
import { FaShippingFast, FaCreditCard, FaHeadset } from 'react-icons/fa';

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
                            height: 'auto',
                            border: '4px solid white'
                        }}
                    />
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
                                color: 'white'
                            }}>
                                <div className="card-body text-center">
                                    <h3 className="h5">Calidad Premium</h3>
                                    <p>Productos seleccionados con los más altos estándares de calidad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100" style={{
                                background: 'linear-gradient(to bottom, #DC143C, #000000)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                color: 'white'
                            }}>
                                <div className="card-body text-center">
                                    <h3 className="h5">Calidad Premium</h3>
                                    <p>Productos seleccionados con los más altos estándares de calidad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100" style={{
                                background: 'linear-gradient(to bottom, #DC143C, #000000)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                color: 'white'
                            }}>
                                <div className="card-body text-center">
                                    <h3 className="h5">Calidad Premium</h3>
                                    <p>Productos seleccionados con los más altos estándares de calidad.</p>
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