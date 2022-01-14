import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import { txtHero } from "../../constants/constants";

import './hero.css';

export default function Hero() {

  const { pathname } = useLocation();
  const { title, subtitle, tag } = txtHero.filter(txt => txt.tag === pathname)[0] || {};
  
  let arrowSection;
  
  if (pathname === '/') {
    arrowSection = 
      <section className="flechaBajar">
        <Container>
          <Row>
            <a href="servicios" className="flcBajar btn btnPrincipal">Ir a los servicios</a>
            <a href="#serviciosIndex" className="flcBajar btn btnSecundario">Ver más contenido</a>
          </Row>
        </Container>
      </section>;
  }

  return (
    <section className={`bienvenidosPrincipal ${tag.replace('/', '')}`}>
      <Navbar/>
      <div className="divPrincipal">
        <section className="textoPrincipal">
          <Container>
            <Row>
              <Col xs="11" sm="11" md="11" className="m-auto">
                <article className="contenidoTexto">
                  <h1>{title}</h1>
                  <h3>{subtitle}</h3>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
        {arrowSection}
      </div>
      <div className="imgPrincipal2"></div>
    </section>
  )
}