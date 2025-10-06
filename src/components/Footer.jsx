import React from "react";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container footer-bottom">
        <img src="./logo.png" alt="Logo AnsorMed" />
        <nav>
          <a href="#" className="footer-link">
            Xizmatlar
          </a>
          <a href="#" className="footer-link">
            Dorilar
          </a>
          <a href="#" className="footer-link">
            Asal
          </a>
          <a href="#" className="footer-link">
            Kontaktlar
          </a>
          <a href="#" className="footer-link">
            Blog
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
