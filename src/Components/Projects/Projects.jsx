import { projects } from './data';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Projects.module.css';

function Project({ project }) {
  const [show, setShow] = useState(false);

  return (
    <Row className={styles.project}>
      <Col md={6} className={styles.imageContainer}>
        <img src={project.mainImg} alt="project showcase" />
      </Col>
      <Col md={6} className={styles.description}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <button className={styles.button} onClick={() => setShow(true)}>
          See More
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
          {project.install && (
            <div className={styles.install}>
              <div className={styles.text}>
                <h1>Easy to install</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  delectus veniam voluptate esse labore officiis aperiam sequi
                  quis. Eaque repellat facere vitae modi accusantium odit
                  laudantium veritatis architecto dicta saepe!
                </p>
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

export default function Projects() {
  return (
    <>
      <h1 className={styles.title}>Projects</h1>
      <Container className={styles.container}>
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </Container>
    </>
  );
}
