import React from "react";
import "../../index.css";

const Main = () => {
  return (
    <section className="hero">
      <span className="live-badge">
        <span className="dot" />
        COOKTHEWEB IS LIVE
      </span>

      <h1>
        We cook the <br />
        <span className="muted">perfect digital</span> <br />
        experience.
      </h1>

      <p>
        Premium websites and apps served with{" "}
        <strong>precision and flavor</strong>. We help startups and
        enterprises scale through superior technology.
      </p>

      <div className="cta">
        <a href="#connect" className="primary">
          Start Cooking <span>→</span>
        </a>

        <a href="#recipe" className="secondary">
          Our Recipe
        </a>
      </div>
    </section>
  );
};

export default Main;
