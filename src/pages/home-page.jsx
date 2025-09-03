import { useState, useEffect } from "react";
import "../styles/home-page.css";
import {
  FaAngleLeft,
  FaAngleRight,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  homeCategories,
  relatedItems,
  keepShopping,
  bikes,
  products,
  history,
  sliderData,
} from "../data";
import { Link } from "react-router-dom";

function HomePage() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent(current === 0 ? sliderData.length - 1 : current - 1);
      setFade(true);
    }, 300);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent(current === sliderData.length - 1 ? 0 : current + 1);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <>
      <div className="section">
        <section className="slider-container">
          <button className="arrow left" onClick={prevSlide}>
            <FaAngleLeft />
          </button>

          <div
            className={`slider ${fade ? "fade-in" : "fade-out"}`}
            style={{ backgroundImage: `url(${sliderData[current].bgImg})` }}
          >
            <div className="slider-content">
              <h2>{sliderData[current].title}</h2>
              <p>{sliderData[current].subtitle1}</p>
              <p>{sliderData[current].subtitle2}</p>

              <div className="icons-row">
                {sliderData[current].icons.map((icon, i) => (
                  <div className="icon-box" key={i}>
                    <span>{icon.text}</span>
                  </div>
                ))}
              </div>

              <div className="offer">
                <p>{sliderData[current].offer.text}</p>
              </div>
            </div>
          </div>

          <button className="arrow right" onClick={nextSlide}>
            <FaAngleRight />
          </button>
        </section>
        <div className="main-home-categories">
          {/* Home Categories */}
          {homeCategories.map((cat) => (
            <section className="items" key={cat.id}>
              <h2>{cat.heading}</h2>
              <div className="boxes">
                {cat.boxes.map((box) => (
                  <div className="image" key={box.id}>
                    <Link to={`/product/${box.id}`}>
                      <img src={box.img} alt={box.text} />
                      <p>{box.text}</p>
                    </Link>
                  </div>
                ))}
              </div>
              <Link to={"/revamp"}>
                <button>{cat.button}</button>
              </Link>
            </section>
          ))}

          {/* Related Items */}
          {relatedItems.map((rel) => (
            <section className="related-items" key={rel.id}>
              <div className="heading">
                <h2>{rel.heading}</h2>
                <a href="#">{rel.link}</a>
              </div>
              <div className="images2">
                {rel.images.map((imgObj) => (
                  <Link to={`/product/${imgObj.id}`} key={imgObj.id}>
                    <img src={imgObj.img} alt={imgObj.text} />
                    <p>{imgObj.text}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* Keep Shopping */}
          <section className="keep-shopping-main">
            {keepShopping.map((shop) =>
              shop.boxes ? (
                <div className="keep-shopping" key={shop.id}>
                  <h3>{shop.heading}</h3>
                  <div className="keep-shopping-box">
                    {shop.boxes.map((box) => (
                      <div className="keep-shopping-img" key={box.id}>
                        <Link to={`/product/${box.id}`}>
                          <img src={box.img} alt={box.text} />
                          {box.text && <p>{box.text}</p>}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <button>{shop.button}</button>
                </div>
              ) : (
                <div className="keep-shopping2" key={shop.id}>
                  <h3>{shop.heading}</h3>
                  {shop.singleImg && (
                    <Link to={`/product/${shop.id}`}>
                      <img src={shop.singleImg} alt={shop.text} />
                      <p>{shop.text}</p>
                    </Link>
                  )}
                  <button>{shop.button}</button>
                </div>
              )
            )}
          </section>

          {/* Bikes */}
          <section className="related-items bikes">
            <div className="heading">
              <h2>{bikes.heading}</h2>
              <a href="#">{bikes.link}</a>
            </div>
            <div className="images2 bikes-img">
              {bikes.images.map((imgObj) => (
                <Link to={`/product/${imgObj.id}`} key={imgObj.id}>
                  <img src={imgObj.img} alt={imgObj.text} />
                  <p>{imgObj.text}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
        {/* Products */}
        <section className="product-container">
          {products.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="product-img" />
              <div className="info">
                <h3 className="title">{item.title}</h3>
                <div className="rating">
                  <span className="rating-value">{item.rating}</span>
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaStar className="star filled" />
                  <FaStarHalfAlt className="star filled" />
                  <FaRegStar className="star" />
                  <span className="reviews">{item.reviews}</span>
                </div>
                <p className="price">{item.price}</p>
                <p className="coupon">{item.coupon}</p>
              </div>
            </div>
          ))}
        </section>
        {/* Browsing History */}
        <section id="browsing-history" className="browsing-history">
          <h3>Inspired by your browsing history</h3>
          <div className="controls">
            <button>
              <FaChevronLeft />
            </button>
            <span>Page 1 of 2</span>
            <button>
              <FaChevronRight />
            </button>
          </div>
          <div className="product-list">
            {history.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <div className="price">₹{item.price}</div>
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) => {
                    const starValue = i + 1;
                    if (item.rating >= starValue) {
                      return <FaStar key={i} />;
                    } else if (item.rating >= starValue - 0.5) {
                      return <FaStarHalfAlt key={i} />;
                    } else {
                      return <FaRegStar key={i} />;
                    }
                  })}
                  <span>{item.reviews}</span>
                </div>
                {item.viewed && <p className="viewed">{item.viewed}</p>}
                {item.delivery && <p className="delivery">{item.delivery}</p>}
              </div>
            ))}
          </div>
          <div className="sign-in">
            <p>See personalised recommendations</p>
            <Link to={"/signin"}>
              <button className="sign-btn">Sign in</button>
            </Link>
            <p>
              New customer? <a href="#">Start here</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
