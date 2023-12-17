import React from "react";
import "../styles/footer.scss"
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>MyBLog</h1>
        <p>all right reserved</p>
      </div>

      <div>
        <h5>follow us</h5>
        <div>
          <a href="/#" target="blank">
            youtube
          </a>
          <a href="/#" target="blank">
            Github
          </a>
          <a href="/#" target="blank">
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
