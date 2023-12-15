import styles from './Contact.module.css';
import email from '../../assets/email.png';
import facebook from '../../assets/facebook.png';
import messenger from '../../assets/messenger.png';
import ebay from '../../assets/ebay.png';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactBody}>
        <h1 className={styles.contact}>Domina? Parašykite mums:</h1>
        <h1 className={styles.email}>
          <img src={email} alt="email icon" /> bmwelektronikalt@gmail.com
        </h1>
        <span className={styles.text}>A &nbsp; &nbsp; R &nbsp; & nbsp; B &nbsp; & nbsp; A</span>
        <p className={styles.text}>Susisiekite su mumis:</p>
        <div className={styles.socials}>
          <div className={styles.social}>
            <a href="facebook.com/BMWengineTemperatureMod" target="blank">
              <img src={facebook} alt="facebook icon" />
              <div>Facebook</div>
            </a>
          </div>
          <div className={styles.social}>
            <a href="https://www.ebay.com/itm/285156702744?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=QZxotanyS9u&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY" target="blank">
              <img src={ebay} alt="ebay icon" />
              <div>Ebay</div>
            </a>
          </div>
          <div className={styles.social}>
            <a href="m.me/104530015573802" target="blank">
              <img src={messenger} alt="messenger icon" />
              <div>Messenger</div>
            </a>
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
    </section>
  );
}
