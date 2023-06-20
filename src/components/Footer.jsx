import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center">
      <div className="font-medium">
        <p className="text-base-content">
          Copyright © {currentYear} - All right reserved by{" "}
          <a
            href={"https://github.com/marcelrzd"}
            className="font-semibold text-primary text-2xl hover:underline transition-all ease-in-out"
          >
            Marcel
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
