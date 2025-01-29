import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black d-flex flex-wrap justify-content-center align-items-center py-5 gap-5 ">
      <a
        className="text-white text-decoration-none"
        href="https://www.tesla.com/en_ph/about"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tesla @2025
      </a>
      <a
        className="text-white text-decoration-none"
        href="https://www.tesla.com/en_ph/legal"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy & Legal
      </a>

      <a
        className="text-white text-decoration-none"
        href="https://www.tesla.com/en_ph/contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>

      <a
        className="text-white text-decoration-none"
        href="https://www.tesla.com/en_ph/findus/list"
        target="_blank"
        rel="noopener noreferrer"
      >
        Locations
      </a>
    </footer>
  );
};

export default Footer;
