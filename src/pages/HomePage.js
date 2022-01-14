import { Accordion, Container, Row } from "react-bootstrap";
import { itemsAbout } from "../constants/constants";

import '../css/homePage.css';

export default function HomePage() {
  return (
    <main className="serviciosIndex" id="serviciosIndex">
      <Container>
        <Row>
          <section className="contenedorServicios col-12 col-md-11 col-lg-12">
            <h3>¿Por qué elegirnos?</h3>
            <h6>Nuestra agencia cuenta con una estructura multidisciplinaria que nos permite la especialización en distintas áreas; promoviendo un intercambio ideológico constante que aporte valor agregado a nuestro proceso creativo, desarrollando conceptos y estrategias impactantes y efectivas.</h6>
            <Accordion className="contenedorServicios col-12 col-md-11 col-lg-12">
            {itemsAbout.map(({ title, category, description, image, id }) => (

              <Accordion.Item eventKey={id} key={id} className="servicio col-12 col-sm-11">
                <Accordion.Header className="headerServicio">
                  <img src={image} alt="icon" className="iconServicio"/>
                  <div className="divHeader">
                    <h5 className="txtServicio">{category}</h5>
                    <h4 className="tituloServicio">{title}</h4>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="bodyServicio">
                  <p className="textoServicio">{description}</p>
                </Accordion.Body>
              </Accordion.Item>

            ))}
            </Accordion>
          </section>
        </Row>
      </Container>
    </main>
  )
}