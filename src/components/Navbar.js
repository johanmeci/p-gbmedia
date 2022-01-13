import { Accordion, Container, useAccordionButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import './navbar.css';

function CustomToggle({ eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (<div onClick={decoratedOnClick} className="line"></div>);
}

document.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY >= 20) {
    header.classList.add('headerFijo');
  } else {
    header.classList.remove('headerFijo');
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
              <ul className="ulMenu">
                  <li className="">
                    <NavLink to="/">Inicio</NavLink>
                  </li>
                  <li className="active">
                    <NavLink to="/services">Servicios</NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/about">Nosotros</NavLink></li>
                  <li className="">
                    <NavLink to="/contact">Contacto</NavLink>
                  </li>
              </ul>
            </Accordion.Collapse>
          </Accordion>
        
      </Container>
    </header>
  )
}

/*
<div>
    <ul>
      <li>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </ul>
</div>
*/