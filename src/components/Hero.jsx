import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">WELCOME TO SHOPSPHERE</p>

        <h1>Discover Products You'll Love</h1>

        <p className="hero-description">
          Shop quality products at great prices, all in one place.
        </p>

        <button className="hero-button">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;