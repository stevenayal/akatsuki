import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ProductList />
      <ProductDetail />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
