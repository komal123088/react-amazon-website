import "../styles/products-detail.css";
import { useParams } from "react-router-dom";
import {
  homeCategories,
  relatedItems,
  keepShopping,
  bestSellers,
  bikes,
} from "../data";
import { useState, useMemo } from "react";
import { useCart } from "../pages/cart-content";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const allProducts = useMemo(() => {
    // 1) Home Categories
    const homeProducts = homeCategories.flatMap((cat) => cat.boxes || []);

    // 2) Keep Shopping
    const keepShoppingProducts = keepShopping.flatMap((cat) => {
      if (cat.boxes) return cat.boxes;
      if (cat.singleImg)
        return [
          {
            id: cat.id,
            img: cat.singleImg,
            text: cat.heading,
            description: cat.description,
            price: cat.price,
          },
        ];
      return [];
    });

    // 3) Related Items
    const relatedProducts = relatedItems.flatMap((cat) => cat.images || []);

    // 4) Best Sellers
    const bestSellerProducts = bestSellers.images || [];

    // 5) Bikes
    const bikesProducts = bikes.images || [];

    return [
      ...homeProducts,
      ...keepShoppingProducts,
      ...relatedProducts,
      ...bestSellerProducts,
      ...bikesProducts,
    ];
  }, []);

  const product = allProducts.find((p) => String(p.id) === id);

  const gallery = product?.gallery || [
    product?.img,
    product?.img,
    product?.img,
  ];

  const [mainImage, setMainImage] = useState(gallery[0]);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-detail">
      {/* Left side images gallery */}
      <div className="gallery">
        <div className="thumbnails">
          {gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="thumbnail"
              onClick={() => setMainImage(img)}
              className={mainImage === img ? "active" : ""}
            />
          ))}
        </div>
        <div className="main-image">
          <img src={mainImage} alt={product.text || "Product"} />
        </div>
      </div>

      {/* Right side detail */}
      <div className="details">
        <h2>{product.text || "No name available"}</h2>
        <p className="price">
          Price: <strong>${product.price || 45}</strong>
        </p>
        <p className="description">
          {product.description || "No description available for this product."}
        </p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
