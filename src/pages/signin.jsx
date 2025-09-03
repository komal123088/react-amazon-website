import { Link } from "react-router-dom";
import "../styles/signin.css";
import { FiX } from "react-icons/fi";

const SignIn = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          style={{ color: "#fc8f00" }}
          className="close-btn"
          onClick={onClose}
          aria-label="Close sign-in modal"
        >
          <FiX />
        </button>
        <h2 className="modal-title">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
          />
          <Link to={"/"}>
            <button type="submit" className="login-btn">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
