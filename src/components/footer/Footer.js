import { NavLink } from "react-router-dom";

import Classes from "./Footer.module.css";
import { ReactComponent as SheqleeGray } from "../../assets/icons/sheqleeGray.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin-logo.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className={Classes.footer}>
      <div className={Classes.container}>
        <div className={Classes["footer-cols"]}>
          <div className={`${Classes["footer-col"]} ${Classes["footer-logo"]}`}>
            <SheqleeGray />
            <h1>ADDRESS</h1>
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
                <Facebook />
              </li>
              <li>
                <Twitter />
              </li>
              <li>
                <Instagram />
              </li>
              <li>
                <Telegram />
              </li>
              <li>
                <Linkedin />
              </li>
              <li>
                <Youtube />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
