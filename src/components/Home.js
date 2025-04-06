import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';

function Home() {
    return (
<<<<<<< Updated upstream
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
=======
        <div className="contenedor-principal">
            <div className="fila alinear-centro min-vh-75">
                <div className="columna-md-6 texto-centro texto-md-inicio">
                    <h1 className="display-4 fw-bold mb-4">Bienvenido a Akatsuki</h1>
                    <p className="lead mb-4">
                        Descubre nuestra colección exclusiva de productos. 
                        Calidad y estilo en cada artículo que ofrecemos.
                    </p>
                    <Link to="/productos" className="btn btn-oscuro btn-lg">
>>>>>>> Stashed changes
                        <FaShoppingBag className="me-2" />
                        Ver Productos
                    </Link>
                </div>
                <div className="columna-md-6 texto-centro">
                    <div className="contenedor-logo mb-4">
                        <img 
                            src={process.env.PUBLIC_URL + '/akatsuki.jpg'} 
                            alt="Logo Akatsuki" 
                            className="img-fluid"
                            style={{
<<<<<<< Updated upstream
                                width: '500px',
                                height: '250px',
                                objectFit: 'cover',
                                border: '4px solid #fff',
                                boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                                borderRadius: '250px 250px 250px 250px / 125px 125px 125px 125px'
=======
                                ancho: '500px',
                                altura: '250px',
                                ajusteObjeto: 'cubrir',
                                borde: '4px solid #343a40',
                                sombra: '0 0 20px rgba(0,0,0,0.3)',
                                radioBorde: '250px 250px 250px 250px / 125px 125px 125px 125px'
>>>>>>> Stashed changes
                            }}
                        />
                    </div>
                </div>
            </div>
            
<<<<<<< Updated upstream
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
=======
            <div className="fila mt-5">
                <div className="columna-12">
                    <h2 className="texto-centro mb-4">¿Por qué elegirnos?</h2>
                    <div className="fila espacio-4">
                        <div className="columna-md-4">
                            <div className="tarjeta altura-completa">
                                <div className="cuerpo-tarjeta texto-centro">
                                    <h3 className="h5">Calidad Premium</h3>
                                    <p>Productos seleccionados con los más altos estándares de calidad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="columna-md-4">
                            <div className="tarjeta altura-completa">
                                <div className="cuerpo-tarjeta texto-centro">
                                    <h3 className="h5">Envío Rápido</h3>
                                    <p>Entrega rápida y segura a cualquier parte del país.</p>
                                </div>
                            </div>
                        </div>
                        <div className="columna-md-4">
                            <div className="tarjeta altura-completa">
                                <div className="cuerpo-tarjeta texto-centro">
                                    <h3 className="h5">Atención Personalizada</h3>
                                    <p>Servicio al cliente de primera calidad para ayudarte en todo momento.</p>
>>>>>>> Stashed changes
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