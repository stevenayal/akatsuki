import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
    const [moneda, setMoneda] = useState('USD');

    // Tasas de cambio (ejemplo)
    const tasasDeCambio = {
        USD: 1,
        PYG: 7300,  // 1 USD = 7300 PYG (aproximado)
        EUR: 0.85   // 1 USD = 0.85 EUR (aproximado)
    };

    const formatearPrecio = (cantidad) => {
        const opciones = {
            USD: { style: 'currency', currency: 'USD' },
            PYG: { style: 'currency', currency: 'PYG', maximumFractionDigits: 0 },
            EUR: { style: 'currency', currency: 'EUR' }
        };

        return new Intl.NumberFormat('es-PY', opciones[moneda]).format(cantidad * tasasDeCambio[moneda]);
    };

    const convertirPrecio = (precioUSD, monedaDestino) => {
        const precioConvertido = precioUSD * tasasDeCambio[monedaDestino];
        return formatearPrecio(precioConvertido, monedaDestino);
    };

    const value = {
        moneda,
        setMoneda,
        convertirPrecio,
        formatearPrecio
    };

    return (
        <CurrencyContext.Provider value={value}>
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