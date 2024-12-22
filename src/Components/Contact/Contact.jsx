import styles from "./Contact.module.css";
import email from "../../assets/email.png";
import facebook from "../../assets/facebook.png";
import messenger from "../../assets/messenger.png";
import ebay from "../../assets/ebay.png";
import { Element } from "react-scroll";
import { useContext } from "react";
import { LanguageContext, translate } from "../Contexts/languageContext";

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
          <a href="https://facebook.com/BMVelektronika" target="blank">
            <img src={facebook} alt="facebook icon" />
            <div>Facebook</div>
          </a>
        </div>
        <div className={styles.social}>
          <a
            href="https://www.ebay.com/itm/285156702744?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=QZxotanyS9u&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY"
            target="blank"
          >
            <img src={ebay} alt="ebay icon" />
            <div>Ebay</div>
          </a>
        </div>
        <div className={styles.social}>
          <a href="https://m.me/E60mod" target="blank">
            <img src={messenger} alt="messenger icon" />
            <div>Messenger</div>
          </a>
        </div>
      </div>
      <a
        style={{ display: "inline-block", marginTop: "3rem", color: "#fff" }}
        href="https://www.flaticon.com/free-icons/email"
        title="email icons"
        target="blank"
      >
        Icons created by Freepik - Flaticon
      </a>
    </Element>
  );
}
