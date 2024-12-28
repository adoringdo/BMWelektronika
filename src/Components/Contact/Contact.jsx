import styles from "./Contact.module.css";
import email from "../../assets/email.png";
import facebook from "../../assets/facebook.png";
import messenger from "../../assets/messenger.png";
import instagram from "../../assets/instagram.png";
import paypal from "../../assets/paypal.png";
import youtube from "../../assets/youtube.png";
import { Element } from "react-scroll";
import { useContext } from "react";
import { LanguageContext } from "../Contexts/languageContext";
import { translate } from "../Functions/translationFunction";

export default function Contact() {

  const { language } = useContext(LanguageContext);

  return (
    <Element id="contact" className={styles.contact}>
      <h1 className={styles.contact}>{translate(language, 'contacts.title')}</h1>
      <h1 className={styles.email}>
        <img src={email} alt="email icon" /> bmwelektronikalt@gmail.com
      </h1>
      <span className={styles.text}>{translate(language, 'contacts.or')}</span>
      <p className={styles.text}>{translate(language, 'contacts.contact us')}</p>
      <div className={styles.socials}>
        <div className={styles.social}>
          <a href="https://www.facebook.com/BMVelektronika" target="blank">
            <img src={facebook} alt="facebook icon" />
            <div>Facebook</div>
          </a>
        </div>
        <div className={styles.social}>
          <a href="https://m.me/E60mod" target="blank">
            <img src={messenger} alt="messenger icon" />
            <div>Messenger</div>
          </a>
        </div>
        <div className={styles.social}>
          <a href="https://instagram.com/bmvelektronika" target="blank">
            <img src={instagram} alt="instagram icon" />
            <div>Instagram</div>
          </a>
        </div>
        <div className={styles.social}>
          <a href="https://www.youtube.com/@bmvelektronika/videos" target="blank">
            <img src={youtube} alt="youtube icon" />
            <div>Youtube</div>
          </a>
        </div>
        <div className={styles.social}>
          <a href="https://paypal.me/BMVelektronika" target="blank">
            <img src={paypal} alt="paypal icon" />
            <div>Paypal</div>
          </a>
        </div>
      </div>
      <a
        style={{ display: "inline-block", marginTop: "3rem", color: "#fff", fontSize: ".6rem" }}
        href="https://www.flaticon.com/free-icons/email"
        title="email icons"
        target="blank"
      >
        Icons created by Freepik - Flaticon
      </a>
    </Element>
  );
}
