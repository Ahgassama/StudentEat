import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <h1>StudentEat</h1>
      <nav>
        <ul>
          <li>
            <a href="#">
              <i class="fas fa-utensils"></i> Proposer un restaurant
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-hands-helping"></i> Devenir partenaire
            </a>
          </li>
          <li>
            <a href="#">Mentions légales</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
