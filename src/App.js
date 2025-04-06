import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <Router>
      <CurrencyProvider>
        <CartProvider>
          <div className="App d-flex flex-column min-vh-100">
            <Header />
            <main className="container py-4 flex-grow-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<ProductList />} />
                <Route path="/producto/:id" element={<ProductDetail />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/sobre-nosotros" element={<About />} />
                <Route path="/perfil" element={<div className="text-center">Página de Perfil en construcción</div>} />
                <Route path="/404" element={
                  <div className="text-center py-5">
                    <h1 className="display-1">404</h1>
                    <p className="lead">Página no encontrada</p>
                    <a href="/" className="btn btn-dark">Volver al inicio</a>
                  </div>
                } />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer />
          </div>
        </CartProvider>
      </CurrencyProvider>
    </Router>
  );
}

export default App;
