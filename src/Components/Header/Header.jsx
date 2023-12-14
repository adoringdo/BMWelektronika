import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Row className="h-100">
          <Col className={styles.text}>
            <h1>
              <span style={{ whiteSpace: 'nowrap' }}>
                Variklio{' '}
                <span style={{ color: 'var(--brand-secondary)' }}>
                  temperatūros
                </span>
              </span>{' '}
              modifikacija
              <br /> BMW automobiliams
            </h1>
            <p>
              Suteikiam BMW turėtojams galimybę, matyti variklio temperatūrą
              savo skydelyje vietoj autopiloto.
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </header>
  );
}
