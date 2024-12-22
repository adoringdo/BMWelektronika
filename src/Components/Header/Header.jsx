import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.css';
import { LanguageContext } from '../Contexts/languageContext';
import { useContext } from 'react';
import { translate } from '../Functions/translationFunction';

export default function Header() {
  const { language } = useContext(LanguageContext);
  return (
    <Element id="home">
      <header className={styles.header}>
        <Container className={styles.container}>
          <Row className="h-100">
            <Col className={styles.text}>
              <h1>
                {translate(language, 'header.title', 'highlight')}
              </h1>
              <p>
                {translate(language, 'header.description')}
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </header>
    </Element>
  );
}
