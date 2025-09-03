import "../styles/revamp.css";
import {
  revamp,
  productSlider,
  bedsheets,
  laundryBags,
  homeDecor,
} from "../data";
import { FaStar, FaRegStar } from "react-icons/fa";

const Revamp = () => {
  return (
    <>
      <div className="container">
        {/* Category Section */}
        <div className="category-carousel">
          {revamp.map((item) => (
            <div className="category-card" key={item.id}>
              <div className="circle">
                <img src={item.img} alt={item.name} />
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        {/* Product Slider */}
        <div className="product-slider">
          <h2 className="slider-title">
            Starting ₹139 | Amazon brands for Home
          </h2>
          <div className="slider-container">
            {productSlider.map((item) => (
              <div className="product-card1" key={item.id}>
                <img src={item.img} alt={item.title} />
                <h3 className="product-title">{item.title}</h3>
                <div className="rating">
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaRegStar className="star empty" />
                  <span className="reviews">{item.reviews}</span>
                </div>
                <div className="price">
                  <span className="new-price">{item.price}</span>{" "}
                  <span className="old-price">{item.oldPrice}</span>{" "}
                  <span className="discount">({item.discount})</span>
                </div>
                <div className="deal-badge">Limited time Deal</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bedsheets */}

        <div className="product-slider">
          <h2 className="slider-title">
            Bedsheets, pillows & more - Up to 70% off
          </h2>
          <div className="slider-container">
            {bedsheets.map((item) => (
              <div className="product-card1" key={item.id}>
                <img src={item.img} alt={item.title} />
                <h3 className="product-title">{item.title}</h3>
                <div className="rating">
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaRegStar className="star empty" />
                  <span className="reviews">{item.reviews}</span>
                </div>
                <div className="price">
                  <span className="new-price">{item.price}</span>{" "}
                  <span className="old-price">{item.oldPrice}</span>{" "}
                  <span className="discount">({item.discount})</span>
                </div>
                <div className="deal-badge">Limited time Deal</div>
              </div>
            ))}
          </div>
        </div>

        {/* Laundry Bags  */}

        <div className="product-slider">
          <h2 className="slider-title">
            Laundry bags, hangers and drying racks under 1199
          </h2>
          <div className="slider-container">
            {laundryBags.map((item) => (
              <div className="product-card1" key={item.id}>
                <img src={item.img} alt={item.title} />
                <h3 className="product-title">{item.title}</h3>
                <div className="rating">
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaRegStar className="star empty" />
                  <span className="reviews">{item.reviews}</span>
                </div>
                <div className="price">
                  <span className="new-price">{item.price}</span>{" "}
                  <span className="old-price">{item.oldPrice}</span>{" "}
                  <span className="discount">({item.discount})</span>
                </div>
                <div className="deal-badge">Limited time Deal</div>
              </div>
            ))}
          </div>
        </div>

        {/* Home decor */}

        <div className="product-slider">
          <h2 className="slider-title">Handpicked Home Decor</h2>
          <div className="slider-container">
            {homeDecor.map((item) => (
              <div className="product-card1" key={item.id}>
                <img src={item.img} alt={item.title} />
                <h3 className="product-title">{item.title}</h3>
                <div className="rating">
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaRegStar className="star empty" />
                  <span className="reviews">{item.reviews}</span>
                </div>
                <div className="price">
                  <span className="new-price">{item.price}</span>{" "}
                  <span className="old-price">{item.oldPrice}</span>{" "}
                  <span className="discount">({item.discount})</span>
                </div>
                <div className="deal-badge">Limited time Deal</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Revamp;
