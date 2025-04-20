import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function CouponGenerator({ cartItems, onApplyCoupon }) {
    const [coupon, setCoupon] = useState('');
    const [isApplied, setIsApplied] = useState(false);

    const generateCoupon = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let couponCode = '';
        
        // Generar 6 letras aleatorias
        for (let i = 0; i < 6; i++) {
            couponCode += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        // Determinar el descuento basado en la cantidad de artículos
        let discount = 0;
        if (cartItems.length === 1) {
            discount = 10;
        } else if (cartItems.length <= 3) {
            discount = 35;
        } else {
            discount = 50;
        }

        // Agregar el número de descuento al final
        couponCode += discount.toString().padStart(2, '0');
        
        setCoupon(couponCode);
        setIsApplied(false);
    };

    const handleApplyCoupon = () => {
        if (coupon) {
            const discount = parseInt(coupon.slice(-2));
            onApplyCoupon(discount);
            setIsApplied(true);
        }
    };

    return (
        <div className="mt-3">
            <Button 
                variant="outline-primary" 
                onClick={generateCoupon}
                className="mb-2"
            >
                Tomar cupón
            </Button>
            
            {coupon && (
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <strong>Cupón:</strong> {coupon}
                    </div>
                    {!isApplied && (
                        <Button 
                            variant="success" 
                            size="sm" 
                            onClick={handleApplyCoupon}
                        >
                            Aplicar
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
}

export default CouponGenerator; 