import "../styles/cart.css";
import { useCart } from "../pages/cart-content";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <p className="empty-cart">
          Your cart is empty. <Link to="/">Shop now</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.text} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.text}</h3>
              <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
              <div className="quantity-control">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${getTotalPrice()}</h3>
        <Link to={"/checkout"}>
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
