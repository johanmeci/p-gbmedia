import { Accordion, Container, useAccordionButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import './navbar.css';


function CustomToggle({ eventKey }) {
  const accordionOnClick = useAccordionButton(eventKey, () => {

    const header = document.querySelector('.header').classList;
    const menu = document.querySelector('#menuPrincipal').classList;
  
    if (!menu.contains('show')) {
      header.add('headerFijo');
    } else if (menu.contains('show') && window.scrollY === 0){
      setTimeout(() => {
        header.remove('headerFijo');
      }, 200);
    }

  });

  return (<div onClick={accordionOnClick} className="line"></div>);
}

/* const hideMenu = () => {
  document.querySelector('#menuPrincipal').classList.remove('show');
  document.querySelector('.header').classList.remove('headerFijo');
} */

document.addEventListener('scroll', () => {

  const header = document.querySelector('.header').classList;
  const menu = document.querySelector('#menuPrincipal').classList;

  if (window.scrollY >= 15 || menu.contains('show')) {
    header.add('headerFijo');
  } else {
    header.remove('headerFijo');
  }
});

export default function Navbar() {
  return (
    <header className="header fixed-top">
      <Container>
        <NavLink to="/">
          <img className="logoPrincipal" src="/images/logoGB.svg" alt="logo gb media group"/>
        </NavLink>
        
          <Accordion className="contenedorBoton">
            <CustomToggle eventKey="0"></CustomToggle>
            <Accordion.Collapse className="menuPrincipal" id="menuPrincipal" eventKey="0">
              <ul className="ulMenu" id="ulMenu">
                  <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/">Inicio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">Servicios</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">Nosotros</NavLink></li>
                  <li>
                    <NavLink to="/contact">Contacto</NavLink>
                  </li>
              </ul>
            </Accordion.Collapse>
          </Accordion>
        
      </Container>
    </header>
  )
}