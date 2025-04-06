import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartIcon() {
    const { getCartItemsCount } = useCart();
    const itemCount = getCartItemsCount();

    return (
        <Link to="/carrito" className="position-relative d-inline-flex align-items-center text-white text-decoration-none">
            <FaShoppingCart size={24} />
            {itemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {itemCount}
                    <span className="visually-hidden">productos en el carrito</span>
                </span>
            )}
        </Link>
    );
}

export default CartIcon; 