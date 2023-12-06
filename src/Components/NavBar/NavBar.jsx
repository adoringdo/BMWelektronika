import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <Navbar expand="lg" className={styles.navBar}>
      <Navbar.Brand href="#home" className={styles.logoContainer}>
        <img alt="logo" src={logo} className="d-inline-block" />{' '}
        <span style={{ color: 'var(--dark)', fontWeight: 'bold' }}>BMW</span>
        elektronika
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navBarCollapse}>
        <Nav className={styles.navLinksContainer}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
