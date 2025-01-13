import { NavLink } from "react-router-dom";

import Classes from "./Footer.module.css";
import sheqleeGray from "../../assets/icons/sheqleeGray.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin-logo.svg";
import telegram from "../../assets/icons/telegram.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className={Classes.footer}>
      <div className={Classes.container}>
        <div className={Classes["footer-cols"]}>
          <div className={`${Classes["footer-col"]} ${Classes["footer-logo"]}`}>
            <img src={sheqleeGray} alt="sheqlee" />
            <h1>Address</h1>
            <p>MIT, Mekelle, Tigray</p>
          </div>
          <div className={Classes["footer-col"]}>
            <h1>Links</h1>
            <ul>
              <li>
                <NavLink to="/companies">Companies</NavLink>
              </li>
              <li>
                <NavLink to="/categories">Categories</NavLink>
              </li>
              <li>
                <NavLink to="/tags">Tags</NavLink>
              </li>
            </ul>
          </div>
          <div className={Classes["footer-col"]}>
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className={Classes["footer-col"]}>
            <h1>Support</h1>
            <ul>
              <li>Getting started</li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
            </ul>
          </div>
          <div className={Classes["footer-col"]}>
            <h1>Legal</h1>
            <ul>
              <li>
                <NavLink to={"/privacypolicy"}>Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to={"/termsandconditions"}>
                  Terms and Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to={"/cookiepolicy"}>Cookie Policy</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={Classes.copyryt}>
          <p>&#169; 2024 Sheqlee Co., Ltd. All rights reserved.</p>
          <div>
            <p>Follow us on</p>
            <ul>
              <li>
                <img src={facebook} alt="facebook icon" />
              </li>
              <li>
                <img src={twitter} alt="twitter icon" />
              </li>
              <li>
                <img src={instagram} alt="instagram icon" />
              </li>
              <li>
                <img src={telegram} alt="telegram icon" />
              </li>
              <li>
                <img src={linkedin} alt="linkedin icon" />
              </li>
              <li>
                <img src={youtube} alt="youtube icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
