import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import SobreNosotros from './pages/SobreNosotros';
import { CurrencyProvider } from './context/CurrencyContext';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router>
            <CurrencyProvider>
                <CartProvider>
                    <div className="d-flex flex-column min-vh-100">
                        <Header />
                        <main className="flex-grow-1">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/productos" element={<ProductList />} />
                                <Route path="/carrito" element={<Cart />} />
                                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                            </Routes>
                        </main>
                        <Footer />
                        <ToastContainer position="bottom-right" />
                    </div>
                </CartProvider>
            </CurrencyProvider>
        </Router>
    );
}

export default App;
