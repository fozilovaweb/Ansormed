import React from "react";

function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div>
          <h1>
            Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.
          </h1>
          <p>
            Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p
            uchraydigan kasalliklarni yengishda yordam beradi. Sog’ligingizni
            o’z ishining professionallariga ishonib topshiring.
          </p>
          <button>Qabulga yozilish</button>
        </div>
        <img src="./hero-img.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
