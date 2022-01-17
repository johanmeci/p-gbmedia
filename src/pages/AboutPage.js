import { Container, Row } from 'react-bootstrap';
import '../css/aboutPage.css';

export default function AboutPage() {
  return (
    <>
    <main className="nosotrosPrincipal" id="nosotrosPrincipal">
      <Container>
        <Row>
          <section className="contenedorNosotros col-12 col-sm-10 col-lg-9">
            <div className="contenedorTexto">
              <h3>¿Quiénes Somos?</h3>
              <p>Somos una compañía joven de tecnología multidisciplinar especializada en desarrollo de contenidos digitales, brindamos asesoría desde la fase inicial de la construcción de una marca hasta la implementación de la estrategia de comunicación y promoción en todas las áreas así como servicios  de IT avanzados. Todo nuestro trabajo se hace con pasión, buscamos generar vínculos emocionales duraderos entre las marcas y sus clientes; siendo conscientes que los productos del futuro deben llamar a nuestros corazones, no a nuestras mentes.</p>
            </div>
          </section>
        </Row>
      </Container>
    </main>
    <section className="seccionSecundariaNosotros">
      <Container>
        <Row>
          <article className="contenedorSecundario col-12 col-sm-8 col-md-6 col-lg-6 col-xl-5">
            <div className="contenedorTexto">
              <h3>Filosofia</h3>
              <p>Todo comienza con un plan de juego. Atacar este plan con las estrategias correctas es primordial. Gb Media Group ofrece una gran cantidad de servicios que le permiten a nuestro equipo ejecutar en consecuencia para lograr el objetivo. Las estrategias nunca se detienen No estamos contentos con lograr el éxito a corto plazo. Nuestros planes de juego tienen en mente el panorama general para lograr un crecimiento continuo y máximos rendimientos. Cualquier plan de juego debe ser constantemente evaluado y se realizan ajustes cuando se le solicite.</p>
            </div>
          </article>
        </Row>
      </Container>
    </section>
    <section className="seccionTresNosotros">
      <Container>
        <Row>
          <article className="contenedorTercero col-12">
            <div className="contenedorTexto">
              <div className="contenedorTxt">
                <h3>Calidad en nuestro servicio</h3>
                <p>En GB Media Group queremos entender y atender las necesidades de nuestros clientes y ofrecerles las mejores soluciones, facilitando un equipo de profesionales como un departamento más de su propia empresa. Nuestros valores y trabajo nos definen, por eso actuamos con la mayor honestidad y profesionalidad, trabajando por proyectos y dando las mejores ventajas en precio/calidad a todos los clientes.</p>
              </div>
              <div className="imgSeccion3"></div>
            </div>
          </article>
        </Row>
      </Container>
    </section>
    <section className="seccionCuatroNosotros">
      <Container>
        <Row>
          <article className="contenedorCuartoNosotros col-12">
            <div className="elemento">
              <div className="icon"></div>
              <h5>Calidad</h5>
              <p>No importa la magnitud de su proyecto, va a tener un producto final que le permita cumplir sus objetivos.</p>
            </div>
            <div className="elemento">
              <div className="icon"></div>
              <h5>Asesoramiento</h5>
              <p>Nuestro servicio va más allá, le daremos sugerencias y propuestas que pueden mejorar sus expectativas iniciales.</p>
            </div>
            <div className="elemento">
              <div className="icon"></div>
              <h5>Innovación</h5>
              <p>Para dar solución a sus necesidades creamos y perfeccionamos procesos que van a hacer de su idea o proyecto un éxito.</p>
            </div>
          </article>
        </Row>
      </Container>
    </section>
    </>
  )
}