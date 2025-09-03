import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="amazon-footer ">
        <div className="footer-top">
          <div>
            <h4>Get to Know Us</h4>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
              <li>Amazon Science</li>
            </ul>
          </div>

          <div>
            <h4>Make Money with Us</h4>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li className="see-more"> See More Make Money with Us</li>
            </ul>
          </div>

          <div>
            <h4>Amazon Payment Products</h4>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>

          <div>
            <h4>Let Us Help You</h4>
            <ul>
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Manage Your Content and Devices</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-logo">
            <span className="logo">amazon</span>
          </div>
          <div className="footer-options">
            <button>English</button>
            <button>$ USD - U.S. Dollar</button>
            <button>🇺🇸 United States</button>
          </div>
        </div>

        <div className="footer-bottom">
          <ul>
            <li>
              Amazon Music
              <br />
              <span>Stream millions of songs</span>
            </li>
            <li>
              Amazon Ads
              <br />
              <span>Reach customers wherever they spend their time</span>
            </li>
            <li>
              6pm
              <br />
              <span>Score deals on fashion brands</span>
            </li>
            <li>
              AbeBooks
              <br />
              <span>Books, art & collectibles</span>
            </li>
            <li>
              ACX
              <br />
              <span>Audiobook Publishing Made Easy</span>
            </li>
            <li>
              Sell on Amazon
              <br />
              <span>Start a Selling Account</span>
            </li>
            <li>
              Veeqo
              <br />
              <span>Shipping Software Inventory Management</span>
            </li>
          </ul>
          <ul>
            <li>
              Amazon Business
              <br />
              <span>Everything For Your Business</span>
            </li>
            <li>
              AmazonGlobal
              <br />
              <span>Ship Orders Internationally</span>
            </li>
            <li>
              Amazon Web Services
              <br />
              <span>Scalable Cloud Computing Services</span>
            </li>
            <li>
              Audible
              <br />
              <span>Listen to Books & Original Audio Performances</span>
            </li>
            <li>
              Box Office Mojo
              <br />
              <span>Find Movie Box Office Data</span>
            </li>
            <li>
              Goodreads
              <br />
              <span>Book reviews & recommendations</span>
            </li>
            <li>
              IMDb
              <br />
              <span>Movies, TV & Celebrities</span>
            </li>
          </ul>
          <ul>
            <li>
              IMDbPro
              <br />
              <span>Get Info Entertainment Professionals Need</span>
            </li>
            <li>
              Kindle Direct Publishing
              <br />
              <span>Indie Digital & Print Publishing Made Easy</span>
            </li>
            <li>
              Prime Video Direct
              <br />
              <span>Video Distribution Made Easy</span>
            </li>
            <li>
              Shopbop
              <br />
              <span>Designer Fashion Brands</span>
            </li>
            <li>
              Woot!
              <br />
              <span>Deals and Shenanigans</span>
            </li>
            <li>
              Zappos
              <br />
              <span>Shoes & Clothing</span>
            </li>
            <li>
              Ring
              <br />
              <span>Smart Home Security Systems</span>
            </li>
          </ul>
          <ul>
            <li>
              eero WiFi
              <br />
              <span>Stream 4K Video in Every Room</span>
            </li>
            <li>
              Blink
              <br />
              <span>Smart Security for Every Home</span>
            </li>
            <li>
              Neighbors App
              <br />
              <span>Real-Time Crime & Safety Alerts</span>
            </li>
            <li>
              Amazon Subscription Boxes
              <br />
              <span>Top subscription boxes – right to your door</span>
            </li>
            <li>
              PillPack
              <br />
              <span>Pharmacy Simplified</span>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
