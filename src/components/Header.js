import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaInfoCircle, FaShoppingCart, FaUser } from 'react-icons/fa';

function Header() {
    return (
        <header className="bg-dark text-white">
            <div className="container">
                <div className="row align-items-center py-3">
                    <div className="col-md-3 col-sm-12 text-center mb-3 mb-md-0">
                        <Link to="/" className="text-decoration-none">
                            <img 
                                src={process.env.PUBLIC_URL + '/akatsuki.jpg'} 
                                alt="Logo Akatsuki" 
                                className="img-fluid rounded-circle mb-2" 
                                style={{ 
                                    width: '80px', 
                                    height: '80px',
                                    objectFit: 'cover',
                                    border: '2px solid #fff',
                                    boxShadow: '0 0 10px rgba(255,255,255,0.3)'
                                }} 
                            />
                            <h1 className="h4 text-white">Tienda Online Akatsuki</h1>
                        </Link>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link d-flex align-items-center" to="/">
                                                <FaHome className="me-2" /> Inicio
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link d-flex align-items-center" to="/productos">
                                                <FaShoppingBag className="me-2" /> Productos
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link d-flex align-items-center" to="/sobre-nosotros">
                                                <FaInfoCircle className="me-2" /> Sobre Nosotros
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link d-flex align-items-center" to="/carrito">
                                                <FaShoppingCart className="me-2" /> Carrito
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link d-flex align-items-center" to="/perfil">
                                                <FaUser className="me-2" /> Perfil
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header; 