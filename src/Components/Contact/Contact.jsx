import styles from './Contact.module.css';
import email from '../../assets/email.png';
import facebook from '../../assets/facebook.png';
import messenger from '../../assets/messenger.png';
import ebay from '../../assets/ebay.png';
import { Element } from 'react-scroll';

export default function Contact() {
  return (
    <Element id="contact" className={styles.contact}>
      <div className={styles.contactBody}>
        <h1 className={styles.contact}>Interested? Email me at:</h1>
        <h1 className={styles.email}>
          <img src={email} alt="email icon" /> bmwelektronikalt@gmail.com
        </h1>
        <span className={styles.text}>O&nbsp; &nbsp;R</span>
        <p className={styles.text}>Reach me through my social:</p>
        <div className={styles.socials}>
          <div className={styles.social}>
            <img src={facebook} alt="facebook icon" />
            <div>Facebook</div>
          </div>
          <div className={styles.social}>
            <img src={ebay} alt="ebay icon" />
            <div>Ebay</div>
          </div>
          <div className={styles.social}>
            <img src={messenger} alt="messenger icon" />
            <div>Messenger</div>
          </div>
        </div>
      </div>
      <a
        style={{ display: 'inline-block', marginTop: '3rem', color: '#fff' }}
        href="https://www.flaticon.com/free-icons/email"
        title="email icons"
        target="blank"
      >
        Icons created by Freepik - Flaticon
      </a>
    </Element>
  );
}
