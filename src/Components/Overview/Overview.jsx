import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Overview.module.css";
import adapter from "../../assets/Adapter.jpg";
import adapter2 from "../../assets/Adapter2.jpg";
import { useContext } from "react";
import { LanguageContext } from "../Contexts/languageContext";
import { translate } from "../Functions/translationFunction";

export default function Overview() {
  
  const { language } = useContext(LanguageContext);

  return (
    <Element id="installation">
      <Container fluid className={styles.container}>
        <Row className={styles.row}>
          <Col md={5} className={`${styles.description} px-5`}>
            <h1>{translate(language, 'installation.title') }</h1>
            <p className="px-4">
              {translate(language, 'installation.description')}
            </p>
            <a
              href="https://drive.google.com/drive/folders/151poO_M4wutoZhE5BGzFmFyZVIuw7pnL"
              target="_blank"
              className={styles.button}
              rel="noreferrer"
            >
              {translate(language, 'installation.button')}
            </a>
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
