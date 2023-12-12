import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Projects.module.css';
import projectmain1 from '../../assets/projectmain1.png';
import projectmain2 from '../../assets/projectmain2.png';

export default function Projects() {
  return (
    <>
      <h1 className={styles.title}>Projects</h1>
      <Container className={styles.container}>
        <Row>
          <Col md={6} className={styles.description}>
            <h1>Project 1</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              reiciendis!
            </p>
            <button className={styles.button}>See More</button>
          </Col>
          <Col md={6} className={styles.imageContainer}>
            <img src={projectmain1} alt="project showcase" />
          </Col>
        </Row>
        <Row>
          <Col md={6} className={styles.imageContainer}>
            <img src={projectmain2} alt="project showcase" />
          </Col>
          <Col md={6} className={styles.description}>
            <h1>Project 2</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              reiciendis!
            </p>
            <button className={styles.button}>See More</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
