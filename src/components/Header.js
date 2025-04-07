import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaInfoCircle, FaShoppingCart, FaUser, FaSearch, FaGlobe } from 'react-icons/fa';
import { useCurrency } from '../context/CurrencyContext';
import CartIcon from './CartIcon';

function Header() {
    const [busqueda, setBusqueda] = useState('');
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const { moneda, setMoneda } = useCurrency();
    const navigate = useNavigate();

    const manejarBusqueda = (e) => {
        e.preventDefault();
        if (busqueda.trim()) {
            navigate(`/productos?buscar=${encodeURIComponent(busqueda.trim())}`);
            setBusqueda('');
        }
    };

    const manejarCambioMoneda = (e) => {
        setMoneda(e.target.value);
    };

    const getBandera = (codigo) => {
        const banderas = {
            'PYG': {
                codigo: 'py',
                nombre: 'Paraguay'
            },
            'USD': {
                codigo: 'us',
                nombre: 'Estados Unidos'
            },
            'EUR': {
                codigo: 'es',
                nombre: 'España'
            }
        };
        return banderas[codigo] || { codigo: '', nombre: '' };
    };

    return (
        <header className="encabezado bg-dark text-white sticky-top shadow">
            <div className="container">
                {/* Primera fila: Logo y Selector de Moneda */}
                <div className="row align-items-center py-2">
                    <div className="col-md-6 col-sm-12 text-center text-md-start mb-2 mb-md-0">
                        <Link to="/" className="texto-sin-decoracion">
                            <img 
                                src={process.env.PUBLIC_URL + '/akatsuki.jpg'} 
                                alt="Logo Akatsuki" 
                                className="img-fluid" 
                                style={{ 
                                    width: '160px', 
                                    height: '80px',
                                    objectFit: 'cover',
                                    border: '2px solid #fff',
                                    boxShadow: '0 0 10px rgba(255,255,255,0.3)',
                                    borderRadius: '80px 80px 80px 80px / 40px 40px 40px 40px'
                                }} 
                            />
                        </Link>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center text-md-end">
                        <div className="d-inline-flex align-items-center gap-3">
                            <div className="selector-moneda">
                                <select 
                                    className="form-select form-select-sm bg-dark text-white border-light" 
                                    value={moneda}
                                    onChange={(e) => setMoneda(e.target.value)}
                                    style={{ width: '140px', paddingLeft: '45px' }}
                                >
                                    {['USD', 'PYG', 'EUR'].map(codigo => {
                                        const bandera = getBandera(codigo);
                                        return (
                                            <option key={codigo} value={codigo}>
                                                <span className="bandera-moneda">
                                                    <img 
                                                        src={`https://flagcdn.com/24x18/${bandera.codigo}.png`}
                                                        alt={bandera.nombre}
                                                        className="me-2"
                                                        width="24"
                                                        height="18"
                                                    />
                                                </span>
                                                {codigo}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div 
                                    className="position-absolute" 
                                    style={{ 
                                        left: '10px', 
                                        top: '50%', 
                                        transform: 'translateY(-50%)',
                                        pointerEvents: 'none'
                                    }}
                                >
                                    <img 
                                        src={`https://flagcdn.com/24x18/${getBandera(moneda).codigo}.png`}
                                        alt={getBandera(moneda).nombre}
                                        width="24"
                                        height="18"
                                    />
                                </div>
                            </div>
                            <CartIcon />
                        </div>
                    </div>
                </div>

                {/* Segunda fila: Barra de búsqueda */}
                <div className="row py-2">
                    <div className="col-12">
                        <form onSubmit={manejarBusqueda} className="d-flex justify-content-center">
                            <div className="input-group" style={{ width: '100%', maxWidth: '600px' }}>
                                <input
                                    type="text"
                                    className="form-control border-light bg-dark text-white"
                                    placeholder="Buscar productos..."
                                    value={busqueda}
                                    onChange={(e) => setBusqueda(e.target.value)}
                                />
                                <button 
                                    className="btn btn-outline-light" 
                                    type="submit"
                                    disabled={!busqueda.trim()}
                                >
                                    <FaSearch />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Tercera fila: Menú de navegación */}
                <div className="row py-2">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-dark p-0">
                            <div className="container-fluid p-0">
                                <button 
                                    className="navbar-toggler mx-auto" 
                                    type="button" 
                                    onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                                    aria-controls="navbarNav" 
                                    aria-expanded={!isNavCollapsed} 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center`} id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item mx-2">
                                            <Link 
                                                className="btn btn-outline-light nav-link px-4 py-2 rounded-pill" 
                                                to="/"
                                            >
                                                <FaHome className="me-2" /> Inicio
                                            </Link>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <Link 
                                                className="btn btn-outline-light nav-link px-4 py-2 rounded-pill" 
                                                to="/productos"
                                            >
                                                <FaShoppingBag className="me-2" /> Productos
                                            </Link>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <Link 
                                                className="btn btn-outline-light nav-link px-4 py-2 rounded-pill" 
                                                to="/sobre-nosotros"
                                            >
                                                <FaInfoCircle className="me-2" /> Sobre Nosotros
                                            </Link>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <Link 
                                                className="btn btn-outline-light nav-link px-4 py-2 rounded-pill" 
                                                to="/perfil"
                                            >
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