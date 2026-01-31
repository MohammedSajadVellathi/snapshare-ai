<button className="demo-btn">
  Get a demo <span className="arrow">→</span>
</button>


import heroImage from "../assets/imag1.jpg";

function Hero() {
  return (
    <section className="hero">
      <span className="hero-tag animate-tag">
        SnapShare AI
      </span>


      <p className="hero-subtext">
        Instant AI Photo Delivery for Events and Photographers using {" "}
        <span className="highlight-text animate-highlight">AI Facial Recognition.</span>
      </p>

      <div className="hero-image">
        <div className="image-wrapper">
          <img src={heroImage} alt="SnapShare visual" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
