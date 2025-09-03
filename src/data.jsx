// ---------------- IMPORTS ----------------
import slider1 from "../src/assets/images/slider.png";
import slider2 from "../src/assets/images/slider3.jpg";
import img1 from "../src/assets/images/image 7.png";
import img2 from "../src/assets/images/image 8.png";
import img3 from "../src/assets/images/image 9.png";
import img4 from "../src/assets/images/image00.png";
import img5 from "../src/assets/images/image 10.png";
import img6 from "../src/assets/images/image 11.png";
import img7 from "../src/assets/images/image 12.png";
import img8 from "../src/assets/images/image 13.png";
import img9 from "../src/assets/images/image 14.png";
import img10 from "../src/assets/images/image 15.png";
import img11 from "../src/assets/images/image 16.png";
import img12 from "../src/assets/images/image 17.png";
import img13 from "../src/assets/images/image 18.png";
import img14 from "../src/assets/images/image 19.png";
import img15 from "../src/assets/images/image 20.png";
import img16 from "../src/assets/images/image 21.png";
import img17 from "../src/assets/images/image 22.png";
import img18 from "../src/assets/images/image 23.png";
import img19 from "../src/assets/images/image 24.png";
import img20 from "../src/assets/images/image 25.png";
import img21 from "../src/assets/images/image 26.png";
import img22 from "../src/assets/images/image 27.png";
import img23 from "../src/assets/images/image 28.png";
import img24 from "../src/assets/images/image 29 (1).png";
import img25 from "../src/assets/images/image 30.png";
import img26 from "../src/assets/images/image 31.png";
import img27 from "../src/assets/images/image 32.png";
import img28 from "../src/assets/images/image 33.png";

// duplicates (allowed/used below as-is to avoid breaking names)
import img29 from "../src/assets/images/image 21.png";
import img30 from "../src/assets/images/image 22.png";
import img31 from "../src/assets/images/image 23.png";
import img32 from "../src/assets/images/image 24.png";

import img33 from "../src/assets/images/image 38.png";
import img34 from "../src/assets/images/image 39.png";
import img35 from "../src/assets/images/image 40.png";
import img36 from "../src/assets/images/image 41.png";
import img37 from "../src/assets/images/image 42.png";
import img38 from "../src/assets/images/image 43.png";
import img39 from "../src/assets/images/image 38.png"; // duplicate of img33 (kept)
import img40 from "../src/assets/images/image 44.png";
import img41 from "../src/assets/images/image 59.png";
import img42 from "../src/assets/images/image 60.png";
import img43 from "../src/assets/images/image 61.png";
import img44 from "../src/assets/images/image 62.png";
import img45 from "../src/assets/images/image 63.png";
import img46 from "../src/assets/images/image 64.png";
import img47 from "../src/assets/images/image 65.png";
import img48 from "../src/assets/images/image 66.png";
import img49 from "../src/assets/images/image 81.png";
import img50 from "../src/assets/images/image 82.png";
import img51 from "../src/assets/images/image 83.png";
import img52 from "../src/assets/images/image 84.png";
import img53 from "../src/assets/images/image 90.png";
import img54 from "../src/assets/images/image 91.png";
import img55 from "../src/assets/images/image 93.png";
import img56 from "../src/assets/images/image 94.png";
import img57 from "../src/assets/images/image 95.png";
import img58 from "../src/assets/images/image 92.png";
import img59 from "../src/assets/images/image 107.png";
import img60 from "../src/assets/images/image 108.png";
import img61 from "../src/assets/images/image 109.png";
import img62 from "../src/assets/images/image 110.png";
import img63 from "../src/assets/images/image 124.png";
import img64 from "../src/assets/images/image 110.png"; // duplicate of img62 (kept)
import img65 from "../src/assets/images/image 118.png";
import img66 from "../src/assets/images/image 119.png";
import img67 from "../src/assets/images/image 120.png";
import img68 from "../src/assets/images/image 121.png";
import img69 from "../src/assets/images/image 122.png";
import img70 from "../src/assets/images/image 123 (1).png";
import img71 from "../src/assets/images/image 123.png";
import img72 from "../src/assets/images/image 124.png"; // duplicate of img63 (kept)
import img73 from "../src/assets/images/image 128.png";
import img74 from "../src/assets/images/image 129.png";
import img75 from "../src/assets/images/image 130.png";
import img76 from "../src/assets/images/image 131.png";
import img78 from "../src/assets/images/image 133.png";
import img79 from "../src/assets/images/image 134.png";
import img80 from "../src/assets/images/image 135.png";
import img81 from "../src/assets/images/image 148.png";
import img82 from "../src/assets/images/image 151.png";
import img83 from "../src/assets/images/image 152.png";

// ---------------- SLIDER ----------------
export const sliderData = [
  {
    id: 1,
    bgImg: slider1,
    title: "Starting ₹99",
    subtitle1: "Budget store",
    subtitle2: "Home, Kitchen & outdoor",
    icons: [
      { img: "/icons/cod.png", text: "PAY ON DELIVERY" },
      { img: "/icons/selection.png", text: "WIDE SELECTION" },
    ],
    offer: {
      img: "/icons/card.png",
      text: "Get extra up to 5% back with Amazon Pay ICICI Bank",
    },
  },
  {
    id: 2,
    bgImg: slider2,
    title: "Up to 50% Off",
    subtitle1: "Electronics & Gadgets",
    subtitle2: "Best deals today",
    icons: [
      { img: "/icons/warranty.png", text: "1 YEAR WARRANTY" },
      { img: "/icons/fast.png", text: "FAST DELIVERY" },
    ],
    offer: {
      img: "/icons/card.png",
      text: "Extra 10% off with Axis Bank Cards",
    },
  },
];

// ---------------- HOME CATEGORIES ----------------
export const homeCategories = [
  {
    id: 100,
    heading: "Revamp Your home in style",
    button: "Explore More",
    boxes: [
      {
        id: 101,
        img: img1,
        text: "Cushion covers, bedsheets & more",
        description:
          "Premium quality cushion covers and bedsheets to enhance your home decor with vibrant colors and soft fabrics.",
        price: 29.99,
      },
      {
        id: 102,
        img: img2,
        text: "Figurine, vases & more",
        description:
          "Elegant figurines and vases to add a touch of sophistication to your living space.",
        price: 39.99,
      },
      {
        id: 103,
        img: img3,
        text: "Home Storage",
        description:
          "Organize your home with stylish and functional storage solutions for all your needs.",
        price: 49.99,
      },
      {
        id: 104,
        img: img4,
        text: "Lighting solutions",
        description:
          "Brighten up your home with modern and energy-efficient lighting options.",
        price: 59.99,
      },
    ],
  },
  {
    id: 200,
    heading: "Appliance for your home| upto 55% off",
    button: "Explore More",
    boxes: [
      {
        id: 201,
        img: img5,
        text: "Air Conditioners",
        description:
          "High-performance air conditioners with energy-saving features for ultimate comfort.",
        price: 499.99,
      },
      {
        id: 202,
        img: img6,
        text: "Refrigerators",
        description:
          "Spacious and efficient refrigerators to keep your food fresh for longer.",
        price: 699.99,
      },
      {
        id: 203,
        img: img7,
        text: "Microwaves",
        description:
          "Advanced microwaves with multiple cooking modes for quick and easy meals.",
        price: 199.99,
      },
      {
        id: 204,
        img: img8,
        text: "Washing Machine",
        description:
          "Durable washing machines with smart features for hassle-free laundry.",
        price: 399.99,
      },
    ],
  },
  {
    id: 300,
    heading: "Starting $149 | Headphones",
    button: "Explore More",
    boxes: [
      {
        id: 301,
        img: img9,
        text: "Starting Rs249 | boAt",
        description:
          "Affordable boAt headphones with powerful bass and long battery life.",
        price: 24.99,
      },
      {
        id: 302,
        img: img10,
        text: "Starting Rs349 | boult",
        description:
          "Boult wireless headphones offering crystal-clear sound and comfort.",
        price: 34.99,
      },
      {
        id: 303,
        img: img11,
        text: "Starting Rs649 | Noise",
        description:
          "Noise-canceling headphones from Noise for immersive audio experience.",
        price: 64.99,
      },
      {
        id: 304,
        img: img12,
        text: "Starting Rs149 | Zebronics",
        description:
          "Budget-friendly Zebronics headphones with reliable performance.",
        price: 14.99,
      },
    ],
  },
  {
    id: 400,
    heading: "Starting $99 | Amazon Brands & more",
    button: "Explore More",
    boxes: [
      {
        id: 401,
        img: img13,
        text: "Starting Rs299|Home Storage &..",
        description:
          "Versatile home storage solutions starting at Rs299 for organized living.",
        price: 29.99,
      },
      {
        id: 402,
        img: img14,
        text: "Up to 60%| Storage &racks",
        description:
          "Discounted storage racks up to 60% off for efficient space management.",
        price: 39.99,
      },
      {
        id: 403,
        img: img15,
        text: "Starting Rs|Toys &games",
        description:
          "Fun toys and games starting at low prices for endless entertainment.",
        price: 19.99,
      },
      {
        id: 404,
        img: img16,
        text: "Upto 60% off | jackets & dresses",
        description:
          "Stylish jackets and dresses with up to 60% off for fashion lovers.",
        price: 49.99,
      },
    ],
  },
  {
    id: 500,
    heading: "Automotive essentials | Upto 60% off",
    button: "Explore More",
    boxes: [
      {
        id: 501,
        img: img17,
        text: "Cleaning accessories",
        description:
          "Essential cleaning accessories for maintaining your vehicle's shine.",
        price: 24.99,
      },
      {
        id: 502,
        img: img18,
        text: "Tyre & rim care",
        description:
          "Products for tyre and rim care to ensure safety and longevity.",
        price: 29.99,
      },
      {
        id: 503,
        img: img19,
        text: "Helmets",
        description: "High-quality helmets for protection during rides.",
        price: 39.99,
      },
      {
        id: 504,
        img: img20,
        text: "Vacuum cleaner",
        description: "Portable vacuum cleaners for easy car interior cleaning.",
        price: 59.99,
      },
    ],
  },
  {
    id: 600,
    heading: "Upto 60% off | styles for women",
    button: "End of season sale",
    boxes: [
      {
        id: 601,
        img: img21,
        text: "Women Clothing",
        description:
          "Trendy women's clothing with up to 60% off in the end-of-season sale.",
        price: 44.99,
      },
      {
        id: 602,
        img: img22,
        text: "Footwear + Handbags",
        description: "Stylish footwear and handbags to complete your look.",
        price: 34.99,
      },
      {
        id: 603,
        img: img23,
        text: "Watches",
        description: "Elegant watches for women with timeless designs.",
        price: 69.99,
      },
      {
        id: 604,
        img: img24,
        text: "Fashion jewellery",
        description: "Affordable fashion jewelry to accessorize any outfit.",
        price: 19.99,
      },
    ],
  },
  {
    id: 700,
    heading: "Starting Amazon Brands & more",
    button: "Explore More",
    boxes: [
      {
        id: 701,
        img: img25,
        text: "Starting $199 | Bedsheets",
        description:
          "Comfortable bedsheets starting at $199 from Amazon brands.",
        price: 19.99,
      },
      {
        id: 702,
        img: img26,
        text: "Starting $199 | Curtains",
        description:
          "Stylish curtains starting at $199 to enhance your windows.",
        price: 24.99,
      },
      {
        id: 703,
        img: img27,
        text: "Minimum 40% off | Ironing board & more",
        description: "Ironing boards and accessories with minimum 40% off.",
        price: 34.99,
      },
      {
        id: 704,
        img: img28,
        text: "Upto 60% off | Home decor",
        description:
          "Home decor items with up to 60% off for a refreshed space.",
        price: 29.99,
      },
    ],
  },
  {
    id: 800,
    heading: "Starting $99 | Home improvement ",
    button: "Explore More",
    boxes: [
      {
        id: 801,
        img: img29,
        text: "Spin mops, wipes & more",
        description: "Efficient spin mops and wipes for easy home cleaning.",
        price: 19.99,
      },
      {
        id: 802,
        img: img30,
        text: "Bathroom hardware",
        description: "Durable bathroom hardware for functional upgrades.",
        price: 29.99,
      },
      {
        id: 803,
        img: img31,
        text: "Hammers & screwdrivers",
        description:
          "Essential tools like hammers and screwdrivers for DIY projects.",
        price: 14.99,
      },
      {
        id: 804,
        img: img32,
        text: "Extension boards, plugs & more",
        description:
          "Reliable extension boards and plugs for home electrical needs.",
        price: 24.99,
      },
    ],
  },
];

// ---------------- RELATED ITEMS ----------------
export const relatedItems = [
  {
    id: 900,
    heading: "Related to items you've viewed",
    link: "see more",
    images: [
      {
        id: 901,
        img: img33,
        text: "Related Product 1",
        description:
          "A complementary product to what you've viewed, offering great value.",
        price: 29.99,
      },
      {
        id: 902,
        img: img34,
        text: "Related Product 2",
        description:
          "Similar item with enhanced features for better performance.",
        price: 34.99,
      },
      {
        id: 903,
        img: img35,
        text: "Related Product 3",
        description: "Budget-friendly alternative with reliable quality.",
        price: 19.99,
      },
      {
        id: 904,
        img: img36,
        text: "Related Product 4",
        description: "Premium version of viewed items for advanced users.",
        price: 49.99,
      },
      {
        id: 905,
        img: img37,
        text: "Related Product 5",
        description: "Eco-friendly option with modern design.",
        price: 39.99,
      },
      {
        id: 906,
        img: img38,
        text: "Related Product 6",
        description: "Compact and portable related accessory.",
        price: 24.99,
      },
      {
        id: 907,
        img: img39,
        text: "Related Product 7",
        description: "High-durability product for everyday use.",
        price: 29.99,
      },
      {
        id: 908,
        img: img44,
        text: "Related Product 8",
        description: "Stylish addition to your collection.",
        price: 34.99,
      },
    ],
  },
  {
    id: 1000,
    heading: "More items to consider",
    link: "see more",
    images: [
      {
        id: 1001,
        img: img41,
        text: "Considered Item 1",
        description: "Highly recommended item based on popular choices.",
        price: 39.99,
      },
      {
        id: 1002,
        img: img42,
        text: "Considered Item 2",
        description: "Versatile product with multiple uses.",
        price: 44.99,
      },
      {
        id: 1003,
        img: img43,
        text: "Considered Item 3",
        description: "Affordable and efficient solution.",
        price: 24.99,
      },
      {
        id: 1004,
        img: img44,
        text: "Considered Item 4",
        description: "Innovative design for modern needs.",
        price: 49.99,
      },
      {
        id: 1005,
        img: img45,
        text: "Considered Item 5",
        description: "Durable and long-lasting option.",
        price: 34.99,
      },
      {
        id: 1006,
        img: img46,
        text: "Considered Item 6",
        description: "User-friendly with easy setup.",
        price: 29.99,
      },
      {
        id: 1007,
        img: img47,
        text: "Considered Item 7",
        description: "Compact size for small spaces.",
        price: 19.99,
      },
      {
        id: 1008,
        img: img45,
        text: "Considered Item 8",
        description: "High-performance at a great price.",
        price: 39.99,
      },
    ],
  },
];

// ---------------- KEEP SHOPPING ----------------
export const keepShopping = [
  {
    id: 1100,
    heading: "Keep shopping for",
    button: "see more",
    boxes: [
      {
        id: 1101,
        img: img49,
        text: "Cool and casual $45",
        description: "Comfortable casual wear for everyday style at $45.",
        price: 45.0,
      },
      {
        id: 1102,
        img: img45,
        text: "Cool and casual $45",
        description:
          "Trendy casual outfits perfect for relaxed occasions at $45.",
        price: 45.0,
      },
      {
        id: 1103,
        img: img51,
        text: "Cool and casual $45",
        description: "Stylish and affordable casual clothing at $45.",
        price: 45.0,
      },
      {
        id: 1104,
        img: img52,
        text: "Cool and casual $45",
        description: "Versatile casual pieces for any wardrobe at $45.",
        price: 45.0,
      },
    ],
  },
  {
    id: 1200,
    heading: "Minimum 50% off | Indoor plants",
    button: "see more",
    singleImg: img52,
    text: "Indoor Plants Offer",
    description:
      "Low-maintenance indoor plants with minimum 50% off to green your space.",
    price: 19.99,
  },
  {
    id: 1300,
    heading: "Customer Most Loved Fashion for you",
    button: "see more",
    boxes: [
      {
        id: 1301,
        img: img41,
        text: "Fashion Item 1",
        description: "Most-loved fashion piece by customers for trendy looks.",
        price: 39.99,
      },
      {
        id: 1302,
        img: img36,
        text: "Fashion Item 2",
        description: "Popular fashion choice with comfortable fit.",
        price: 34.99,
      },
      {
        id: 1303,
        img: img42,
        text: "Fashion Item 3",
        description: "Customer favorite for stylish and affordable wear.",
        price: 29.99,
      },
      {
        id: 1304,
        img: img43,
        text: "Fashion Item 4",
        description: "Top-rated fashion item for everyday elegance.",
        price: 44.99,
      },
    ],
  },
  {
    id: 1400,
    heading: "Minimum 50% off | Indoor plants",
    button: "see more",
    singleImg: img52,
    text: "Indoor Plants Deal",
    description:
      "Discounted indoor plants with at least 50% off for home decor.",
    price: 24.99,
  },
];

// ---------------- BIKES ----------------
export const bikes = {
  id: 1600,
  heading: "No cost EMI up to 24 months | Starting Rs4300INR/month*",
  link: "see more",
  images: [
    {
      id: 1601,
      img: img59,
      text: "Bike Model 1",
      description:
        "High-performance bike with advanced gearing for smooth rides.",
      price: 799.99,
    },
    {
      id: 1602,
      img: img60,
      text: "Bike Model 2",
      description: "Durable mountain bike for off-road adventures.",
      price: 599.99,
    },
    {
      id: 1603,
      img: img61,
      text: "Bike Model 3",
      description: "Urban commuter bike with lightweight frame.",
      price: 499.99,
    },
    {
      id: 1604,
      img: img62,
      text: "Bike Model 4",
      description: "Electric bike for eco-friendly commuting.",
      price: 1499.99,
    },
  ],
};

// ---------------- BEST SELLERS (added so import doesn't break) ----------------
export const bestSellers = {
  heading: "Best Sellers in Computers & Accessories",
  link: "see more",
  images: [
    { id: 1701, img: img33, text: "Bestseller 1", price: 29.99 },
    { id: 1702, img: img34, text: "Bestseller 2", price: 34.99 },
    { id: 1703, img: img35, text: "Bestseller 3", price: 19.99 },
    { id: 1704, img: img36, text: "Bestseller 4", price: 49.99 },
  ],
};

// ---------------- PRODUCTS ----------------
export const products = [
  {
    id: 1,
    image: img63,
    title:
      "CHKOKKO Women's Round Neck Full Sleeves Gym Sports Regular Fit T-Shirt",
    rating: 3.5,
    reviews: "1,319",
    price: "Rs509",
    coupon: "Save Rs100 with coupon",
  },
];

// ---------------- BROWSER HISTORY ----------------
export const history = [
  {
    id: 1,
    title:
      "COOL AND CASUAL Beach Wear for Women Co Ord Set Three Piece Dress Top Short and Shrug Beach Dresses...",
    price: "744.00",
    oldPrice: "",
    discount: "",
    rating: 3.5,
    reviews: 319,
    viewed: "200+ viewed in past month",
    image: img45,
    delivery: "FREE Delivery",
  },
  {
    id: 2,
    title:
      "Aahwan Solid Ditsy Floral Print Shirred Mini Cami Dress for Women's & Girl's",
    price: "499.00",
    oldPrice: "",
    discount: "",
    rating: 4,
    reviews: 8,
    viewed: "",
    image: img46,
    delivery: "",
  },
  {
    id: 3,
    title:
      "Indiglam Styles Beach Wear Multicolor Co Ord Set Two Piece Dress Top Short for Women",
    price: "989.00",
    oldPrice: "",
    discount: "",
    rating: 4.5,
    reviews: 43,
    viewed: "300+ viewed in past month",
    image: img43,
    delivery: "",
  },
  {
    id: 4,
    title: "ALL YOURS Women's Floral Printed Dress| Floral Dresses for...",
    price: "517.00",
    oldPrice: "",
    discount: "",
    rating: 4,
    reviews: 60,
    viewed: "300+ viewed in past month",
    image: img44,
    delivery: "FREE Delivery by Amazon",
  },
  {
    id: 5,
    title: "Aahwan Women's Midi Fit And Flare Dress",
    price: "429.00",
    oldPrice: "",
    discount: "",
    rating: 4,
    reviews: 905,
    viewed: "200+ viewed in past month",
    image: img41,
    delivery: "",
  },
  {
    id: 6,
    title:
      "Beach Dresses for Women Co Ord Set 2 Piece Dress Shirt and Short Beach Wear for Women || Beach Dress for Women ||",
    price: "424.00 - 474.00",
    oldPrice: "",
    discount: "",
    rating: 5,
    reviews: 50,
    viewed: "200+ viewed in past month",
    image: img35,
    delivery: "",
  },
];

// ---------------- REVAMP ----------------
export const revamp = [
  { name: "Sofa and More", img: img11 },
  { name: "Home Furnishing", img: img17 },
  { name: "Home Decor", img: img27 },
  { name: "Decorative Lights", img: img29 },
  { name: "Wall Decor", img: img30 },
  { name: "Home Luxe", img: img31 },
  { name: "Prayer and Spiritual Store", img: img32 },
  { name: "Rare Amazon Finds", img: img33 },
  { name: "Buy More Save More", img: img34 },
];

// ---------------- AMAZON BRANDS ----------------
export const amazonBrands = [
  {
    img: img11,
    title: "Solimo",
    rating: 4,
    reviews: 14,
    price: "Rs389.00",
    oldPrice: "Rs1,299.00",
    discount: "69% off",
  },
  {
    img: img12,
    title: "Solimo",
    rating: 4,
    reviews: 324,
    price: "Rs239.00",
    oldPrice: "Rs999.00",
    discount: "76% off",
  },
  {
    img: img15,
    title: "Amazon Basics",
    rating: 4,
    reviews: 5825,
    price: "Rs459.00",
    oldPrice: "Rs699.00",
    discount: "34% off",
  },
  {
    img: img16,
    title: "Product 4",
    rating: 4.5,
    reviews: 15,
    price: "Rs199",
    oldPrice: "Rs599",
    discount: "65% off",
  },
  {
    img: img14,
    title: "Product 5",
    rating: 4,
    reviews: 22,
    price: "Rs699",
    oldPrice: "Rs1,299",
    discount: "45% off",
  }, // img added
  {
    img: img16,
    title: "Product 6",
    rating: 2,
    reviews: 5,
    price: "Rs149",
    oldPrice: "Rs399",
    discount: "63% off",
  },
];

// ---------------- PRODUCT SLIDER ----------------
export const productSlider = [
  {
    id: 1,
    img: img60,
    title: "Solimo",
    reviews: 14,
    price: "Rs369.00",
    oldPrice: "Rs1,199.00",
    discount: "69% off",
  },
  {
    id: 2,
    img: img30,
    title: "Solimo",
    reviews: 324,
    price: "Rs239.00",
    oldPrice: "Rs799.00",
    discount: "70% off",
  },
  {
    id: 3,
    img: img32,
    title: "Amazon Basics",
    reviews: 5825,
    price: "Rs459.00",
    oldPrice: "Rs699.00",
    discount: "34% off",
  },
  {
    id: 4,
    img: img41,
    title: "Solimo",
    reviews: 12,
    price: "Rs519.00",
    oldPrice: "Rs1,399.00",
    discount: "63% off",
  },
  {
    id: 5,
    img: img63,
    title: "Solimo",
    reviews: 382,
    price: "Rs269.00",
    oldPrice: "Rs599.00",
    discount: "55% off",
  },
  {
    id: 6,
    img: img56,
    title: "Solimo",
    reviews: 11,
    price: "Rs379.00",
    oldPrice: "Rs1,499.00",
    discount: "75% off",
  },
];

// ---------------- BEDSHEETS ----------------
export const bedsheets = [
  {
    id: 1,
    img: img65,
    title: "Solimo",
    reviews: 14,
    price: "Rs369.00",
    oldPrice: "Rs1,199.00",
    discount: "69% off",
  },
  {
    id: 2,
    img: img66,
    title: "Solimo",
    reviews: 324,
    price: "Rs239.00",
    oldPrice: "Rs799.00",
    discount: "70% off",
  },
  {
    id: 3,
    img: img67,
    title: "Amazon Basics",
    reviews: 5825,
    price: "Rs459.00",
    oldPrice: "Rs699.00",
    discount: "34% off",
  },
  {
    id: 4,
    img: img68,
    title: "Solimo",
    reviews: 12,
    price: "Rs519.00",
    oldPrice: "Rs1,399.00",
    discount: "63% off",
  },
  {
    id: 5,
    img: img69,
    title: "Solimo",
    reviews: 382,
    price: "Rs269.00",
    oldPrice: "Rs599.00",
    discount: "55% off",
  },
  {
    id: 6,
    img: img70,
    title: "Solimo",
    reviews: 11,
    price: "Rs379.00",
    oldPrice: "Rs1,499.00",
    discount: "75% off",
  },
];

// ---------------- LAUNDRY BAGS ----------------
export const laundryBags = [
  {
    id: 1,
    img: img71,
    title: "Solimo",
    reviews: 14,
    price: "Rs369.00",
    oldPrice: "Rs1,199.00",
    discount: "69% off",
  },
  {
    id: 2,
    img: img72,
    title: "Solimo",
    reviews: 324,
    price: "Rs239.00",
    oldPrice: "Rs799.00",
    discount: "70% off",
  },
  {
    id: 3,
    img: img73,
    title: "Amazon Basics",
    reviews: 5825,
    price: "Rs459.00",
    oldPrice: "Rs699.00",
    discount: "34% off",
  },
  {
    id: 4,
    img: img74,
    title: "Solimo",
    reviews: 12,
    price: "Rs519.00",
    oldPrice: "Rs1,399.00",
    discount: "63% off",
  },
  {
    id: 5,
    img: img75,
    title: "Solimo",
    reviews: 382,
    price: "Rs269.00",
    oldPrice: "Rs599.00",
    discount: "55% off",
  },
  {
    id: 6,
    img: img76,
    title: "Solimo",
    reviews: 11,
    price: "Rs379.00",
    oldPrice: "Rs1,499.00",
    discount: "75% off",
  },
];

// ---------------- HOME DECOR ----------------
export const homeDecor = [
  {
    id: 1,
    img: img78,
    title: "Solimo",
    reviews: 14,
    price: "Rs369.00",
    oldPrice: "Rs1,199.00",
    discount: "69% off",
  },
  {
    id: 2,
    img: img79,
    title: "Solimo",
    reviews: 324,
    price: "Rs239.00",
    oldPrice: "Rs799.00",
    discount: "70% off",
  },
  {
    id: 3,
    img: img80,
    title: "Amazon Basics",
    reviews: 5825,
    price: "Rs459.00",
    oldPrice: "Rs699.00",
    discount: "34% off",
  },
  {
    id: 4,
    img: img81,
    title: "Solimo",
    reviews: 12,
    price: "Rs519.00",
    oldPrice: "Rs1,399.00",
    discount: "63% off",
  },
  {
    id: 5,
    img: img82,
    title: "Solimo",
    reviews: 382,
    price: "Rs269.00",
    oldPrice: "Rs599.00",
    discount: "55% off",
  },
  {
    id: 6,
    img: img83,
    title: "Solimo",
    reviews: 11,
    price: "Rs379.00",
    oldPrice: "Rs1,499.00",
    discount: "75% off",
  },
];
