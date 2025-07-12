import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs="12" className="divFooter">
            <ul className="footerDatos">
              <li><span>Ayuda y Soporte</span></li>
              <li><a href="mailto:info@info.com">info@info.com</a></li>
              <li><a href="tel:+001231231212">(+00) 123 123 12 12</a></li>
              <li>Cali - Colombia</li>
            </ul>
            <ul className="footerDatos">
              <li><span>Nuestros Servicios</span></li>
              <li><Link to="/web-services">Servicios Web</Link></li>
              <li><Link to="/hosting">Host & Data Center</Link></li>
            </ul>
            <ul className="footerDatos">
              <li><span>Compañía</span></li>
              <li><Link to="/about">Nosotros</Link></li>
              <li><Link to="/services">Servicios</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </Col>
          <Col xs="12" className="footerInferior">
            <p>Website developed during my time working with the company. Use only for personal portfolio.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
