import React from "react";
import "../../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} TaskDash. All rights reserved.
    </footer>
  );
};

export default Footer;
