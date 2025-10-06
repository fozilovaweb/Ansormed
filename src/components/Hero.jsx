import React from "react";

function Hero() {
  return (
    <div className="Hero">
      <div className="container small-hero">
        <div className="left">
          <h1 className="titel">
            Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.
          </h1>
          <p className="text">
            Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p
            uchraydigan kasalliklarni yengishda yordam beradi. Sog’ligingizni
            o’z ishining professionallariga ishonib topshiring.
          </p>
          <a href="#" className="hero-link">
            Qabulga yozilish
          </a>
        </div>
        <img className="right-img" src="./hero-img.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
