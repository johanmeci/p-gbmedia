import { Accordion, Container, Row } from "react-bootstrap";
import { contentCallCenter, contentServices, contentStages } from "../constants/constants";

import '../css/servicesPage.css';

export default function Servicios() {
  return (
    <main className="serviciosPrincipal" id="serviciosPrincipal">
      <Container>
        <Row>
          {contentServices.map(({ id, tag, title, items, images }) => (
            
          <section className={`contenedorServicio ${tag} col-12`} id={`${tag}`} key={id}>

            <div className={`contenedorDisplay ${images[0].type}`}>
              <h3>{title}</h3>
              <div className="contenedorImg">
              {images.map(({ id, type, image }) => (

                type === 'svg' ? <img src={image} alt="img servicio" key={id}/> : <div className={`img${id+1}`} style={{backgroundImage: `url(${image})`}} key={id}></div>
                
              ))}
              </div>
            </div>
            <div className="contenedorTexto">
              {items.map(({ id, txt, description }) => (
                <div className="divTexto" key={id}>
                  <h6>{txt}</h6>
                  <p>{description}</p>
                </div>
              ))}
            </div>
            
          </section>
          
          ))}

          <section className="contenedorServicio posicionamiento col-12" id="posicionamiento">
            <div className="contenedorTexto">
              <h3>Estrategias de posicionamiento de marca</h3>
              <p>En GB Media Group te ayudamos a transformar tu manera de atraer y captar clientes a través de internet. Construimos comunidad alrededor de tu marca y la fidelizamos a través de contenidos y automatización. Le convertimos en una autoridad en su sector; nosotros solo hablamos de resultados.</p>
            </div>
            <div className="contenedorEtapas">
              <h4>Dividimos nuestro proceso en cinco etapas</h4>
              <Accordion className="contenedorMaster">
                {contentStages.map(({ id, title, description }) => (
                  <Accordion.Item eventKey={id} className="etapa" key={id}>
                    <Accordion.Header className="headerEtapa">
                      <h5>{title}</h5>
                    </Accordion.Header>
                    <Accordion.Body className="bodyEtapa" id={`bodyEtapa${id+1}`}>
                      <p>{description}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </section>

          <section className="contenedorServicio callcenter col-12" id="callcenter">
            <div className="contenedorTexto">
              <h3>Call Center</h3>
              <p>Ofrecemos una solución completa de callcenter para compañías de todos los tamaños, nuestro servicio es escalable y se ajusta a las necesidades de tanto empresas en crecimiento como grandes compañías; estas son las razones por la que lo invitamos a contratar nuestro servicio de callcenter.</p>
              <div className="imgSeccionCall"></div>
            </div>
            <div className="contenedorLista">
              {contentCallCenter.map(({ id, title, description }) => (
                <div className="lista" key={id}>
                  <h5>{title}</h5>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="contenedorServicio hosting col-12" id="hosting">
            <h3>Hosting y Data Center</h3>
            <div className="contenedorTexto">
              <div className="divTexto">
                <h6>Hosting</h6>
                <p>Nuestro departamento de programación desarrolla soluciones a la medida según las necesidades específicas de clientes en diversos sectores.</p>
              </div>
              <div className="divTexto">
                <h6>Data Center</h6>
                <p>Diseñado para cubrir las necesidades técnicas de los entornos TIC empresariales, los servicios de data center de GB media group son la mejor alternativa para los clientes que quieren centrar sus recursos en áreas que aportan mayor valor a su negocio.</p>
              </div>
            </div>
            <div className="divDisplay">
              <div className="imgDataCenter"></div>
            </div>
          </section>
        </Row>
      </Container>
    </main>
  )
}