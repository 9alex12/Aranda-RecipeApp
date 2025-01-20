import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img src="/assets/hero_image.png" className="hero__img" alt="imagen hero" />
      <p className="hero__text">
        <span className="hero__text-one">Recetas</span>
        <span className="hero__text-two">para todos</span>
      </p>
    </section>
  );
};

export default Hero;
