import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {year} Jason Alway</p>
    </footer>
  );
}

export default Footer;
