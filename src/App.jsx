import { useState } from "react";
import jejuCarrot from "./assets/jeju-carrot.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">NANOBANANA</div>
        <div className="menu-icon">☰</div>
      </nav>

      <main className="hero-section">
        <div className="image-container">
          <div className="glow-effect"></div>
          <img
            src={jejuCarrot}
            className="product-image"
            alt="Premium Jeju Carrot"
          />
        </div>

        <div className="content-container">
          <span className="tag">Jeju Organic</span>
          <h1 className="title">
            The Golden <br />
            <span className="highlight">Soil Essence.</span>
          </h1>
          <p className="description">
            Grown in the volcanic nutrient-rich soil of Jeju Island. Crunchy
            texture, unparalleled sweetness, and vibrant energy in every bite.
          </p>

          <div className="price-tag">
            <span className="currency">₩</span>32,000{" "}
            <span className="unit">/ 5kg</span>
          </div>

          <div className="actions">
            <button
              className="btn-primary"
              onClick={() => setCount((count) => count + 1)}
            >
              Add to Cart {count > 0 && `(${count})`}
            </button>
            <button className="btn-secondary">View Details</button>
          </div>

          <div className="features">
            <div className="feature-item">
              <span className="icon">🌋</span>
              <span>Volcanic Soil</span>
            </div>
            <div className="feature-item">
              <span className="icon">💧</span>
              <span>Pure Water</span>
            </div>
            <div className="feature-item">
              <span className="icon">✨</span>
              <span>Premium Grade</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
