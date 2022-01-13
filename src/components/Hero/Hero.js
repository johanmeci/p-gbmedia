import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";

import './hero.css';

export default function Hero() {
  return (
    <section className="bienvenidosPrincipal">
      <Navbar/>
      <div className="divPrincipal">
        <section className="textoPrincipal">
          <Container>
            <Row>
              <Col xs="11" sm="11" md="11" className="m-auto">
                <article className="contenidoTexto">
                  <h1>Servicios Web y Audiovisuales</h1>
                  <h3>Somos un grupo empresarial joven y especializado en la creación y desarrollo de negocios online, obteniendo resultados que satisfacen sus necesidades.</h3>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="flechaBajar">
          <Container>
            <Row>
              <a href="servicios" className="flcBajar btn btnPrincipal">Ir a los servicios</a>
              <a href="#serviciosIndex" className="flcBajar btn btnSecundario">Ver más contenido</a>
            </Row>
          </Container>
        </section>
      </div>
      <div className="imgPrincipal2"></div>
    </section>
  )
}