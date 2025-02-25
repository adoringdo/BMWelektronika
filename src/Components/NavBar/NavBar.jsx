import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavBar.module.css';
import { useContext } from 'react';
import { LanguageContext } from '../Contexts/languageContext';
import { translate } from '../Functions/translationFunction';
import './navbar-overrides.css';


export default function NavBar() {

  const { language, setLanguage } = useContext(LanguageContext);

  function changeLanguage(newLang){
    newLang !== language && setLanguage(newLang);
    localStorage.setItem('language', newLang);
  }

  return (
    <Navbar expand="lg" className={styles.navBar}>
      <Link
        spy
        to="home"
        offset={-68}
        className={`${styles.logoContainer} navbar-brand`}
      >
        <img alt="logo" src={logo} className="d-inline-block" />{' '}
        <span style={{ color: 'var(--dark)', fontWeight: 'bold' }}>BMW</span>
        elektronika
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className={`${styles.navLinksContainer} navbar-nav`}>
          <li className="nav-item">
            <Link
              activeClass={styles.active}
              spy
              to="projects"
              className="nav-link"
              offset={-68}
            >
              {translate(language, 'navbar.projects')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass={styles.active}
              spy
              to="installation"
              className="nav-link"
              offset={-68}
            >
              {translate(language, 'navbar.installation')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass={styles.active}
              spy
              to="contact"
              className="nav-link"
              offset={-68}
            >
              {translate(language, 'navbar.contacts')}
            </Link>
          </li>
          <li className={`nav-item ${styles.languageContainer}`}>
            <button
              className={styles.language + ' ' + (language === 'lt' ? styles.active : '')}
              onClick={() => changeLanguage('lt')}
            >
              LT
            </button>
            <button
              className={styles.language + ' ' + (language === 'en' ? styles.active : '')}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}
