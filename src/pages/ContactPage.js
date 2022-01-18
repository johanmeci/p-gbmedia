import { Container, Row, Form, Button, Col } from "react-bootstrap";

import '../css/contactPage.css';

export default function ContactPage() {
  return (
    <>
      <main className="principalContacto" id="principalContacto">
        <Container>
          <Row>
            <section className="contenedorContacto col-12 col-md-6 col-lg-5 col-xl-4">
              <h2>Contáctenos</h2>
              <div className="contenedorFormulario">
                <Form className="formularioContacto">
                  <div className="msgF"></div>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Nombre" name="formName"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email" placeholder="Dirección de correo" name="formEmail"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formService">
                    <Form.Select>
                      <option value="">¿De qué se trata?</option>
                      <option value="Website">Website</option>
                      <option value="Web App">Web App</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Marketing Digital">Marketing Digital</option>
                      <option value="SEO">SEO</option>
                      <option value="Ausiovisuales">Ausiovisuales</option>
                      <option value="Otro">Otro</option>
                    </Form.Select>
                  </Form.Group>
                  <Button type="submit" className="btn btnPrincipal" id="btnEnviar">Enviar</Button>
                </Form>
              </div>
            </section>
          </Row>
        </Container>
      </main>
      <section className="seccionSecundariaContacto">
        <Container>
          <Row>
            <Col xs="12" lg="11" className="m-auto">
              <h2>Oficinas</h2>
              <div className="contenedorSecundario">
                <div className="contenedorMapa">
                  {/* <iframe src=""></iframe> */}
                  <div className="divDatos">
                    <h5>Datos de contacto</h5>
                    <p><a href="mailto:info@info.com">info@info.com</a></p>
                    <p><a href="tel:+00123123123">(+00) 123 123 123 12 12</a></p>
                    <p>Cali - Colombia</p>
                  </div>
                </div>
                <div className="contenedorInfo">
                  <h3>¿Busca ayuda para un servicio?</h3>
                  <p>Escríbanos y nos comunicaremos con usted, para brindarle mas información acerca de nuestros servicios y responder todas sus inquietudes además del formulario puede contactarse con nosotros via emial en info@info.com.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}