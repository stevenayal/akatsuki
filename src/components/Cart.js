import React from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import CouponGenerator from './CouponGenerator';

function Cart() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyDiscount,
        getTotal
    } = useCart();

    const { subtotal, discount, total } = getTotal();

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Carrito de Compras</h2>
            
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <>
                    <Row>
                        <Col md={8}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th>Total</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.nombre}</td>
                                            <td>${item.precio.toFixed(2)}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                    className="form-control"
                                                    style={{ width: '70px' }}
                                                />
                                            </td>
                                            <td>${(item.precio * item.quantity).toFixed(2)}</td>
                                            <td>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    Eliminar
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                        
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <h5>Resumen del Pedido</h5>
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-between">
                                            <span>Subtotal:</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        {discount > 0 && (
                                            <div className="d-flex justify-content-between text-success">
                                                <span>Descuento ({discount}%):</span>
                                                <span>-${((subtotal * discount) / 100).toFixed(2)}</span>
                                            </div>
                                        )}
                                        <div className="d-flex justify-content-between fw-bold mt-2">
                                            <span>Total:</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    
                                    <CouponGenerator 
                                        cartItems={cartItems}
                                        onApplyCoupon={applyDiscount}
                                    />
                                    
                                    <div className="mt-3">
                                        <Button 
                                            variant="primary" 
                                            className="w-100 mb-2"
                                            onClick={() => alert('Proceder al pago')}
                                        >
                                            Proceder al Pago
                                        </Button>
                                        <Button 
                                            variant="outline-danger" 
                                            className="w-100"
                                            onClick={clearCart}
                                        >
                                            Vaciar Carrito
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
}

export default Cart; 