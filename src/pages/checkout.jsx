import "../styles/checkout.css";

const Checkout = () => {
  return (
    <>
      <div className="checkout-container">
        {/* Left Side */}
        <div className="checkout-left">
          {/* Address */}
          <div className="checkout-box checkout">
            <h3>1 Shipping address</h3>
            <p>
              Jacob Smith <br />
              Prince Norah Bint <br />
              Saudi Arabia, Jizan 85648
            </p>
            <a href="#">Change</a>
          </div>

          {/* Payment */}
          <div className="checkout-box">
            <h3>2 Choose a payment method</h3>

            <div className="method-box">
              <label>
                <input type="radio" name="pay" /> Your available balance
              </label>
            </div>

            <div className="method-box">
              <label>
                <input type="radio" name="pay" /> Amazon Gift Card
              </label>
            </div>

            <div className="method-box">
              <label>
                <input type="radio" name="pay" /> Add a credit or debit card
              </label>
            </div>

            <div className="method-box">
              <h4>Buy Now, Pay Later</h4>
              <label>
                <input type="radio" name="pay" /> Pay Over time with Tabby
              </label>
            </div>

            <div className="method-box">
              <h4>Other payment options</h4>
              <label>
                <input type="radio" name="pay" /> Cash on Delivery (COD)
              </label>
            </div>

            <button className="yellow-btn">Use this payment method</button>
          </div>

          {/* Offers */}
          <div className="checkout-box">
            <h3>3 Offers</h3>
          </div>

          {/* Items */}
          <div className="checkout-box">
            <h3>4 Items and shipping</h3>
            <button className="gray-btn">Performance</button>
            <p className="terms">
              By placing your order, you agree to Amazon’s privacy notice and
              conditions of use. Please see how we use and protect your personal
              information in our Privacy Notice. Our Returns Policy applies to
              most items, but certain items are non-returnable.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="checkout-right">
          <div className="summary-box">
            <h4>Order Summary</h4>
            <p>Items: SAR 200.14</p>
            <p>Shipping & handling: —</p>
            <hr />
            <p className="total">
              Order total: <span>SAR 200.14</span>
            </p>
            <a href="#">How are shipping costs calculated?</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
