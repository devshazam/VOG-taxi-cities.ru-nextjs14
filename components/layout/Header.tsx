"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../public/logo.webp';
import Image from 'next/image';


export default function Header(){

  const expand = 'lg';

  return (
     <Navbar expand={expand} className="bg-body-tertiary "  sticky="top">
          <Container>
            <Navbar.Brand href="/" rel="nofollow">
              <Image src={Logo} width={120}  height={40} style={{display: 'inline-block'}} className='logo' alt='такси межгород'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Меню
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/#tarifs"  rel="nofollow">Тарифы</Nav.Link>
                  <Nav.Link href="/#reviews"  rel="nofollow">Оценки</Nav.Link>
                  <Nav.Link href="/#order"  rel="nofollow">Заказать</Nav.Link>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
  );
}
