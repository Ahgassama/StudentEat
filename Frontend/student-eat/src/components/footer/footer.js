import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <h1>StudentEat</h1>
      <nav>
        <ul>
          <li>
            <a href="https://www.facebook.com/studenteat.lille/">
              <img src="./images/fbk.png" alt="img-logo" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://instagram.com/studenteat.lille?igshid=YmMyMTA2M2Y=">
              <img src="./images/insta.png" alt="img-logo" />
              Instagram
            </a>
          </li>
          <li>
            <p> Mentions légales</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
