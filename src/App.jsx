import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./pages/home-page";
import ProductDetail from "./pages/product-detail";

import { CartProvider } from "../src/pages/cart-content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart-page";
import SignIn from "./pages/signin";
import Revamp from "./pages/revamppage";
import Checkout from "./pages/checkout";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/revamp" element={<Revamp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
