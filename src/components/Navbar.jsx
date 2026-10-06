import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        🛍️ ShopSphere
      </div>

      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
      </div>

      <div className="navbar-actions">
        <button className="search-btn">🔍 Search</button>
        <button className="cart-btn">🛒 Cart</button>
      </div>

    </nav>
  );
}

export default Navbar;