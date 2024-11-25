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
                  <a className='phone-ya yellow' href="tel:+79297837333" rel="nofollow">Тел.: +7 (929) 783-73-33</a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/#tarifs"  rel="nofollow">Тарифы</Nav.Link>
                  <Nav.Link href="/#reviews"  rel="nofollow">Оценки</Nav.Link>
                  <Nav.Link href="/#order"  rel="nofollow">Заказать</Nav.Link>
                </Nav>
				
				  <a className='phone-ya p-2' href="tel:+79297837333" rel="nofollow">Тел.: +7 (929) 783-73-33</a>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
  );
}
