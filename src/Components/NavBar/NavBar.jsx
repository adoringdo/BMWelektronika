import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavBar.module.css';
import { LanguageContext, translate } from '../Contexts/languageContext';
import { useContext } from 'react';

export default function NavBar() {

  const { language } = useContext(LanguageContext);

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
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}
