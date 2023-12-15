import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Overview.module.css';
import adapter from '../../assets/Adapter.jpg';
import adapter2 from '../../assets/Adapter2.jpg';

export default function Overview() {
  return (
    <Element id="installation">
      <Container fluid className={styles.container}>
        <Row className={styles.row}>
          <Col md={5} className={`${styles.description} px-5`}>
            <h1>Lengva instaliacija</h1>
            <p className="px-4">
              Tik 4 laidai, LCI modeliams reikalinga nedidelė spidometro
              modifikacija
            </p>
          </Col>
          <Col md={7} className={styles.imageContainer}>
            <img src={adapter} alt="Adapter" />
            <img src={adapter2} alt="Adapter" />
          </Col>
        </Row>
      </Container>
    </Element>
  );
}
