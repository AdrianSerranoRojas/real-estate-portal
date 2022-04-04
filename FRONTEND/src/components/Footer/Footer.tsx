import React from "react";

function Footer({...props }) {
  return (
    <footer className="Footer bg-dark text-white mt-5" {...props}>
      &copy; {new Date().getFullYear()} Real-Estate-Portal
    </footer>
  );
}

export default Footer;
