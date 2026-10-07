import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>Sorry, this product doesn't exist.</p>
      </div>
    );
  }

  const savings = product.originalPrice - product.price;

  return (
    <main className="product-page">

      {/* Breadcrumb */}
      <div className="product-breadcrumb">
        Home / {product.category} / {product.name}
      </div>

      <div className="product-details">

        {/* Left - Image */}
        <div className="product-image-section">

          <span className="image-discount">
            {product.discount}% OFF
          </span>

          <div className="product-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

        </div>

        {/* Right - Product Info */}
        <div className="product-info">

          <p className="details-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <div className="rating-row">
            <span className="rating-badge">
              ⭐ {product.rating}
            </span>

            <span className="rating-text">
              Excellent Rating
            </span>
          </div>

          <div className="product-divider"></div>

          {/* Price */}
          <div className="details-prices">

            <span className="details-price">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            <span className="details-original-price">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>

            <span className="details-discount">
              {product.discount}% OFF
            </span>

          </div>

          <p className="tax-text">
            Inclusive of all taxes
          </p>

          <p className="savings-text">
            You save ₹{savings.toLocaleString("en-IN")}
          </p>

          {/* Description */}
          <p className="product-description">
            Experience premium quality with the{" "}
            <strong>{product.name}</strong>.
            Designed for everyday use with a modern
            look, reliable performance and excellent value.
          </p>

          {/* Delivery */}
          <div className="delivery-box">

            <div className="delivery-icon">
              🚚
            </div>

            <div>
              <strong>Free Delivery</strong>
              <p>Delivery available to your location</p>
            </div>

          </div>

          {/* Quantity */}
          <div className="quantity-section">

            <span>Quantity</span>

            <div className="quantity-control">

              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>

          </div>

          {/* Buttons */}
          <div className="product-actions">

            <button className="details-cart-button">
              🛒 Add to Cart
            </button>

            <button className="buy-now-button">
              Buy Now
            </button>

          </div>

          <div className="secure-info">
            🔒 Secure payments &nbsp; • &nbsp;
            Easy returns &nbsp; • &nbsp;
            Genuine product
          </div>

        </div>
      </div>
    </main>
  );
}

export default ProductDetails;