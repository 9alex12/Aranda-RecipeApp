import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Con el Patrocinio de</p>
      <img 
        src="/assets/products.png"
        alt="imagen productos patrocinadores" 
        className="footer__img"
      />
    </footer>
  );
};

export default Footer;
