import React from 'react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
    const { formatearPrecio } = useCurrency();

    if (cartItems.length === 0) {
        return (
            <div className="container mt-5 text-center">
                <h2>Tu carrito está vacío</h2>
                <p>¿Por qué no agregas algunos productos?</p>
                <Link to="/productos" className="btn btn-dark mt-3">
                    Ver Productos
                </Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Tu Carrito</h2>
            <div className="row">
                <div className="col-md-8">
                    {cartItems.map(item => (
                        <div key={item.id} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={item.imagen}
                                        alt={item.nombre}
                                        className="img-fluid rounded-start"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nombre}</h5>
                                        <p className="card-text">{item.descripcion}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button
                                                    className="btn btn-outline-dark"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <span className="btn btn-outline-dark disabled">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    className="btn btn-outline-dark"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                            <p className="h5 mb-0">
                                                {formatearPrecio(item.precio * item.quantity)}
                                            </p>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Resumen del Pedido</h5>
                            <hr />
                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal:</span>
                                <span>{formatearPrecio(getCartTotal())}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Envío:</span>
                                <span>Gratis</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-3">
                                <strong>Total:</strong>
                                <strong>{formatearPrecio(getCartTotal())}</strong>
                            </div>
                            <Link to="/checkout" className="btn btn-dark w-100">
                                Proceder al Pago
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart; 