import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { FaTrash, FaMinus, FaPlus, FaMoneyBill, FaCreditCard, FaUniversity, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Cart() {
    const { cartItems, removeFromCart, updateQuantity, getTotal, applyDiscount, discount } = useCart();
    const { formatearPrecio } = useCurrency();
    const [metodoPago, setMetodoPago] = useState('');
    const [cupon, setCupon] = useState('');
    const [codigoGenerado, setCodigoGenerado] = useState('');

    // Función para generar un código aleatorio
    const generarCodigoAleatorio = () => {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let codigo = '';
        for (let i = 0; i < 6; i++) {
            codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return codigo;
    };

    // Función para determinar el porcentaje de descuento basado en la cantidad de productos
    const determinarDescuento = (cantidad) => {
        if (cantidad > 3) return 50;
        if (cantidad >= 2) return 35;
        return 10;
    };

    // Generar un nuevo código cuando cambia la cantidad de productos
    useEffect(() => {
        const nuevoCodigo = generarCodigoAleatorio() + determinarDescuento(cartItems.length);
        setCodigoGenerado(nuevoCodigo);
    }, [cartItems.length]);

    const handleProcederPago = () => {
        if (!metodoPago) {
            toast.error('Por favor selecciona un método de pago');
            return;
        }
        // Aquí iría la lógica para proceder con el pago
        toast.success('Procesando pago...');
    };

    const handleAplicarCupon = () => {
        if (cupon.toUpperCase() === codigoGenerado) {
            const porcentajeDescuento = determinarDescuento(cartItems.length);
            applyDiscount(porcentajeDescuento);
            toast.success(`¡Cupón aplicado con éxito! ${porcentajeDescuento}% de descuento`);
        } else {
            toast.error('Cupón no válido');
        }
        setCupon('');
    };

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

    const { subtotal, total } = getTotal();

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
                                        src={process.env.PUBLIC_URL + '/productos/' + item.imagen}
                                        alt={item.nombre}
                                        className="img-fluid rounded-start"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                        onError={(e) => {
                                            e.target.src = process.env.PUBLIC_URL + '/akatsuki.jpg';
                                        }}
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
                            <div className="mb-3">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ingresa tu cupón"
                                        value={cupon}
                                        onChange={(e) => setCupon(e.target.value)}
                                    />
                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={handleAplicarCupon}
                                    >
                                        <FaTicketAlt />
                                    </button>
                                </div>
                                <small className="text-muted">
                                    Te ganaste un cupón de descuento: {codigoGenerado}
                                </small>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal:</span>
                                <span>{formatearPrecio(subtotal)}</span>
                            </div>
                            {discount > 0 && (
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Descuento ({discount}%):</span>
                                    <span>-{formatearPrecio((subtotal * discount) / 100)}</span>
                                </div>
                            )}
                            <div className="d-flex justify-content-between mb-3">
                                <span>Total:</span>
                                <span>{formatearPrecio(total)}</span>
                            </div>
                            <p className="text-muted small text-end mb-3">IVA incluido</p>

                            <div className="mb-4">
                                <h6 className="mb-3">Método de Pago</h6>
                                <div className="d-grid gap-2">
                                    <button 
                                        className={`btn btn-outline-dark d-flex align-items-center justify-content-center gap-2 ${metodoPago === 'efectivo' ? 'active' : ''}`}
                                        onClick={() => setMetodoPago('efectivo')}
                                    >
                                        <FaMoneyBill /> Efectivo
                                    </button>
                                    <button 
                                        className={`btn btn-outline-dark d-flex align-items-center justify-content-center gap-2 ${metodoPago === 'transferencia' ? 'active' : ''}`}
                                        onClick={() => setMetodoPago('transferencia')}
                                    >
                                        <FaUniversity /> Transferencia Bancaria
                                    </button>
                                    <button 
                                        className={`btn btn-outline-dark d-flex align-items-center justify-content-center gap-2 ${metodoPago === 'tarjeta' ? 'active' : ''}`}
                                        onClick={() => setMetodoPago('tarjeta')}
                                    >
                                        <FaCreditCard /> Tarjeta de Crédito
                                    </button>
                                </div>
                            </div>

                            <button 
                                onClick={handleProcederPago}
                                className="btn btn-dark w-100"
                                disabled={!metodoPago}
                            >
                                Proceder al Pago
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart; 