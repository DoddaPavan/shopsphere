import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  rating,
  discount,
}) {
const [isWishlisted, setIsWishlisted] = useState(false);
  return (
    <div className="product-card">
        {discount && <span className="discount-badge">{discount}% OFF</span>}
      <div className="product-image-container">
  <img src={image} alt={name} />
  <button
  className="wishlist-button"
  onClick={() => setIsWishlisted(!isWishlisted)}
  aria-label={`Add ${name} to wishlist`}
>
  {isWishlisted ? "♥" : "♡"}
</button>
</div>
      <p className="product-category">{category}</p>
      <p className="product-rating">⭐ {rating}</p>

     <Link to={`/product/${id}`} className="product-link">
  <h3>{name}</h3>
</Link>

   <div className="product-prices">
  <span className="product-price">
    ₹{price.toLocaleString("en-IN")}
  </span>

  <span className="product-original-price">
    ₹{originalPrice.toLocaleString("en-IN")}
  </span>
</div>

   <button className="add-to-cart-button">
  Add to Cart
</button>
    </div>
  );
}

export default ProductCard;