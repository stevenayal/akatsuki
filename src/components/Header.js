import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaInfoCircle, FaShoppingCart, FaUser, FaSearch, FaGlobe } from 'react-icons/fa';
import { useCurrency } from '../context/CurrencyContext';
import CartIcon from './CartIcon';
import styled from 'styled-components';

// Componente estilizado para el título
const AkatsukiTitle = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');
    margin: 0;
    font-family: 'New Tegomin', serif;
    font-size: 2rem;
    font-weight: bold;
    color: #FF0000;
    text-shadow: 
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000,
        0 0 10px rgba(255,0,0,0.5);
    letter-spacing: 3px;
    transform: scaleY(1.2);
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    
    &:hover {
        color: #FF0000;
        text-shadow: 
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000,
            0 0 15px rgba(255,0,0,0.8);
        transition: text-shadow 0.3s ease;
    }
`;

// Componente estilizado para los enlaces de navegación
const NavLink = styled(Link)`
    font-family: 'New Tegomin', serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    &:hover {
        transform: scale(1.05);
        transition: transform 0.2s ease;
    }
`;

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
                <div className="row align-items-center py-2">
                    {/* Título Akatsuki */}
                    <div className="col-md-3 col-6 text-center text-md-start mb-2 mb-md-0">
                        <Link to="/" className="texto-sin-decoracion">
                            <AkatsukiTitle>
                                AKATSUKI
                            </AkatsukiTitle>
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="col-md-6 col-12 order-md-2">
                        <form onSubmit={manejarBusqueda} className="d-flex justify-content-center mb-2 mb-md-0">
                            <div className="input-group" style={{ maxWidth: '100%' }}>
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

                    {/* Currency and Cart */}
                    <div className="col-md-3 col-6 text-end mb-2 mb-md-0 order-md-3">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                            <div className="selector-moneda position-relative">
                                <select 
                                    className="form-select form-select-sm bg-dark text-white border-light" 
                                    value={moneda}
                                    onChange={(e) => setMoneda(e.target.value)}
                                    style={{ width: '80px', paddingLeft: '30px' }}
                                >
                                    {['USD', 'PYG', 'EUR'].map(codigo => {
                                        const { codigo: codigoPais } = getBandera(codigo);
                                        return (
                                            <option key={codigo} value={codigo}>
                                                {codigo}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div 
                                    className="position-absolute" 
                                    style={{ 
                                        left: '8px', 
                                        top: '50%', 
                                        transform: 'translateY(-50%)',
                                        pointerEvents: 'none'
                                    }}
                                >
                                    <img 
                                        src={`https://flagcdn.com/20x15/${getBandera(moneda).codigo}.png`}
                                        alt={getBandera(moneda).nombre}
                                        width="20"
                                        height="15"
                                    />
                                </div>
                            </div>
                            <CartIcon />
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <div className="row py-1">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-dark p-0">
                            <div className="container-fluid p-0">
                                <button 
                                    className="navbar-toggler w-100 mb-2" 
                                    type="button" 
                                    onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                                    aria-controls="navbarNav" 
                                    aria-expanded={!isNavCollapsed} 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                                    <ul className="navbar-nav w-100 justify-content-center">
                                        <li className="nav-item mx-1 mx-md-2 mb-1 mb-md-0">
                                            <NavLink 
                                                className="btn btn-outline-light nav-link px-2 px-md-3 py-1 rounded-pill w-100" 
                                                to="/"
                                            >
                                                <FaHome className="me-1 me-md-2" /> Inicio
                                            </NavLink>
                                        </li>
                                        <li className="nav-item mx-1 mx-md-2 mb-1 mb-md-0">
                                            <NavLink 
                                                className="btn btn-outline-light nav-link px-2 px-md-3 py-1 rounded-pill w-100" 
                                                to="/productos"
                                            >
                                                <FaShoppingBag className="me-1 me-md-2" /> Productos
                                            </NavLink>
                                        </li>
                                        <li className="nav-item mx-1 mx-md-2 mb-1 mb-md-0">
                                            <NavLink 
                                                className="btn btn-outline-light nav-link px-2 px-md-3 py-1 rounded-pill w-100" 
                                                to="/sobre-nosotros"
                                            >
                                                <FaInfoCircle className="me-1 me-md-2" /> Sobre Nosotros
                                            </NavLink>
                                        </li>
                                        <li className="nav-item mx-1 mx-md-2 mb-1 mb-md-0">
                                            <NavLink 
                                                className="btn btn-outline-light nav-link px-2 px-md-3 py-1 rounded-pill w-100" 
                                                to="/perfil"
                                            >
                                                <FaUser className="me-1 me-md-2" /> Perfil
                                            </NavLink>
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