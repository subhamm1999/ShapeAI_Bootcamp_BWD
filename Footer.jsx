import React from "react";

function Footer() {
  var currdate = new Date().getFullYear();
  return (
    <footer>
      <p>CopyRight @{currdate};</p>
    </footer>
  );
}

export default Footer;
