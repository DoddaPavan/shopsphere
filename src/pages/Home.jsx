import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
const filteredProducts = products
  .filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  })
  .sort((a, b) => {
    if (sortOption === "price-low") {
  return a.price - b.price;
}

if (sortOption === "price-high") {
  return b.price - a.price;
}
    if (sortOption === "rating-high") {
      return b.rating - a.rating;
    }

    return 0;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="categories-section">
  <div className="categories-heading">
    <p>SHOP BY CATEGORY</p>
    <h2>Explore Our Categories</h2>
    <span>Find products that match your lifestyle.</span>
  </div>
      <div className="categories">
        <CategoryCard
          name="Electronics"
          description="Explore the latest gadgets"
        />

        <CategoryCard
          name="Fashion"
          description="Discover the latest styles"
        />

        <CategoryCard
          name="Home & Living"
          description="Make your home better"
        />

        <CategoryCard
          name="Beauty"
          description="Care and beauty products"
        />
      </div>
      </section>
<section className="products-section">
  <div className="products-heading">
    <p>FEATURED PRODUCTS</p>

    <h2>Popular Products</h2>

    <span>Discover products picked for you.</span>
  </div>
  <div className="products-search">
 <input
  type="text"
  placeholder="Search products..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
</div>
<p className="product-count">
  {filteredProducts.length} products found
</p>
<div className="category-filters">
  <div className="sort-container">
  <label htmlFor="sort">Sort by:</label>

  <select
    id="sort"
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)}
  >
    <option value="price-low">Price(Low to High)</option>
    <option value="price-high">Price(High to Low)</option>
    <option value="rating-high">Rating(High to Low)</option>
  </select>
</div>
  <button onClick={() => setSelectedCategory("All")}>
    All
  </button>

  <button onClick={() => setSelectedCategory("Electronics")}>
    Electronics
  </button>

  <button onClick={() => setSelectedCategory("Fashion")}>
    Fashion
  </button>

  <button onClick={() => setSelectedCategory("Home & Living")}>
    Home & Living
  </button>

  <button onClick={() => setSelectedCategory("Beauty")}>
    Beauty
  </button>
</div>

 <div className="products-grid">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        originalPrice={product.originalPrice}
        image={product.image}
        category={product.category}
        rating={product.rating}
        discount={product.discount}
      />
    ))
  ) : (
    <div className="no-products">
      <h3>No products found</h3>
      <p>Try searching for something else.</p>
    </div>
  )}
</div>
</section>
    </>
  );
}

export default Home;