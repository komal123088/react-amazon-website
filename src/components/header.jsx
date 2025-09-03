import { useState } from "react";
import SignIn from "../pages/signin";
import "../styles/header.css";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { IoReorderThreeOutline, IoLocationOutline } from "react-icons/io5";
import amazon from "../assets/images/amazon2.png";
import flag from "../assets/images/download.png";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className="navbar">
      {/* Top Section */}
      <div className="navbar-top">
        <div className="logo">
          <Link to={"/"}>
            {" "}
            <img src={amazon} alt="Amazon Logo" />
          </Link>
        </div>

        <div className="location">
          <span className="small-text">Delivering to</span>
          <span className="update">
            <IoLocationOutline /> Pakistan
          </span>
        </div>

        <div className="search-bar">
          <select className="search-select">
            <optgroup label="General">
              <option value="all">All Departments</option>
              <option value="sellers">Best Sellers</option>
              <option value="deals">Today's Deals</option>
            </optgroup>
            <optgroup label="Categories">
              <option value="art">Art & Craft</option>
              <option value="automotive">Automotive</option>
              <option value="baby">Baby</option>
              <option value="beauty">Beauty</option>
              <option value="books">Books</option>
              <option value="computer">Computer</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="health">Health</option>
              <option value="kitchen">Home & Kitchen</option>
              <option value="industrial">Industrial</option>
              <option value="kindle">Kindle Store</option>
            </optgroup>
          </select>
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="search-input"
          />
          <button className="search-icon">
            <FaSearch />
          </button>
        </div>

        <div className="language">
          <img src={flag} alt="Language selection flag" />
          <select className="lang-select">
            <option value="en">English</option>
            <option value="ur">Urdu</option>
            <option value="hi">Hindi</option>
            <option value="ta">Tamil</option>
          </select>
        </div>

        <div
          className="account"
          onClick={openModal}
          style={{ cursor: "pointer" }}
        >
          <span className="small-text">Hello, sign in</span>
          <select className="account-select">
            <option>Account & Lists</option>
            <option>Your Account</option>
            <option>Your Orders</option>
            <option>Your Wishlist</option>
            <option>Your Prime</option>
            <option>Sign Out</option>
          </select>
        </div>

        <div className="orders">
          <span className="small-text">Returns</span>
          <span className="bold-text">& Orders</span>
        </div>

        <div className="cart">
          <Link to="/cart">
            <FaShoppingCart className="cart-icon" />
            Cart
          </Link>
        </div>
      </div>

      <div className="navbar-bottom">
        <ul>
          <li>
            <button className="menu-btn" onClick={toggleMenu}>
              <IoReorderThreeOutline />
              <span> All</span>
            </button>
          </li>
          <li>Amazon miniTV</li>
          <li>Sell</li>
          <li>Best Sellers</li>
          <li>Today's Deals</li>
          <li>Mobiles</li>
          <li>Customer Service</li>
          <li>
            <select className="prime-select">
              <option>Prime</option>
              <option>Video</option>
              <option>Music</option>
              <option>Reading</option>
            </select>
          </li>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>New Releases</li>
          <li>Home & Kitchen</li>
          <li>Amazon Pay</li>
        </ul>
      </div>

      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="side-header">
          <FaUserCircle className="user-icon" />
          <span onClick={openModal} style={{ cursor: "pointer" }}>
            Hello, sign in
          </span>
          <button className="close-btn" onClick={toggleMenu}>
            <FiX />
          </button>
        </div>

        <div className="side-content">
          <h4>Digital Content & Devices</h4>
          <ul>
            <li>Prime Video</li>
            <li>Amazon Music</li>
            <li>Kindle E-readers & Books</li>
            <li>Amazon Appstore</li>
          </ul>

          <h4>Shop by Department</h4>
          <ul>
            <li>Electronics</li>
            <li>Computers</li>
            <li>Smart Home</li>
            <li>Arts & Crafts</li>
            <li>See all</li>
          </ul>

          <h4>Programs & Features</h4>
          <ul>
            <li>Gift Cards</li>
            <li>Shop By Interest</li>
            <li>Amazon Live</li>
            <li>International Shopping</li>
            <li>See All</li>
          </ul>

          <h4>Settings</h4>
          <ul>
            <li>Your Account</li>
            <li>English</li>
            <li>Customer Services</li>
          </ul>
        </div>

        <div
          className="side-footer"
          onClick={openModal}
          style={{ cursor: "pointer" }}
        >
          Sign In
        </div>
      </div>

      {showModal && <SignIn onClose={closeModal} />}
    </header>
  );
}

export default Header;
