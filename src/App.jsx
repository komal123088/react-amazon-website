import "./App.css";
import { CartProvider } from "./pages/cart-content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/home-page";
import ProductDetail from "./pages/product-detail";
import Cart from "./pages/cart-page";
import SignIn from "./pages/signin";
import Revamp from "./pages/revamppage";
import Checkout from "./pages/checkout";

function App() {
  return (
    <CartProvider>
      <Router basename="/react-amazon-website/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="revamp" element={<Revamp />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
