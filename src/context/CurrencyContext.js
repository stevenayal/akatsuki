import React, { createContext, useState, useContext } from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
    const [moneda, setMoneda] = useState('USD');

    const formatearPrecio = (precio) => {
        // Asegurarse de que el precio sea un número
        const precioNumerico = typeof precio === 'string' ? parseFloat(precio) : precio;
        
        const precios = {
            USD: precioNumerico,
            PYG: precioNumerico * 7500,
            EUR: precioNumerico * 0.92
        };

        const formato = {
            USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
            PYG: new Intl.NumberFormat('es-PY', { style: 'currency', currency: 'PYG' }),
            EUR: new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' })
        };

        return formato[moneda].format(precios[moneda]);
    };

    return (
        <CurrencyContext.Provider value={{ moneda, setMoneda, formatearPrecio }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency debe ser usado dentro de un CurrencyProvider');
    }
    return context;
} 