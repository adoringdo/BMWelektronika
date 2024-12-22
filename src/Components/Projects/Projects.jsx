import { projects } from './data';
import { useContext, useState } from 'react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Projects.module.css';
import { LanguageContext, translate } from '../Contexts/languageContext';

function Project({ project }) {
  const { language } = useContext(LanguageContext);
  const [show, setShow] = useState(false);

  return (
    <Row className={styles.project}>
      <Col md={6} className={styles.imageContainer}>
        <img src={project.mainImg} alt="project showcase" />
      </Col>
      <Col md={6} className={styles.description}>
        <h1>{translate(language, project.title)}</h1>
        <p>{translate(language, project.description)}</p>
        <button className={styles.button} onClick={() => setShow(true)}>
          {translate(language, 'projects.button')}
        </button>
      </Col>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName={styles.modal}
        contentClassName={styles.modalContent}
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          style={{ border: 'none' }}
        >
          <Modal.Title style={{ flexGrow: '1', fontSize: '2rem' }}>
            {project.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.modalImages}>
            {project.pictures.map((picture) => (
              <img src={picture} alt="project image" key={picture} />
            ))}
          </div>
          <iframe
            className={styles.video}
            src={project.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {project.install && (
            <div className={styles.install}>
              <div className={styles.text}>
                <h1>Modifikacija LCI modeliams</h1>
                <p>{project.installDescription}</p>
              </div>

              <div className={styles.image}>
                <img src={project.install} />
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Row>
  );
}

Project.propTypes = {
  project: PropTypes.object,
};

export default function Projects() {
  const { language } = useContext(LanguageContext);

  return (
    <Element id="projects">
      <h1 className={styles.title}>{translate(language, 'navbar.projects')}</h1>
      <Container className={styles.container}>
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </Container>
    </Element>
  );
}

