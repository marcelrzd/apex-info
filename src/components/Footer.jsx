import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center">
      <div className="font-medium">
        <p className="text-base-content">
          Copyright © {currentYear} - All right reserved by{" "}
          <a
            href={"https://marcelrzd.com"}
            className="text-2xl font-semibold transition-all ease-in-out text-primary hover:underline"
          >
            Marcel
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
