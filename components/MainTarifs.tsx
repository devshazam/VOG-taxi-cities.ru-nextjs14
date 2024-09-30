"use client";

import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { motion } from "framer-motion";
import Image from 'next/image';
import Tstandart from '../public/t-standart.webp';
import Tkomfort from '../public/t-komfort.webp';
import TkomfortPlus from '../public/TkomfortPlus.webp';
import Miniven from '../public/Miniven.webp';
import Modal from 'react-bootstrap/Modal';


export default function MainTarifs() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Такси Межгород 24/7</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <div className='w-full text-center  mb-1'>
              <a title={"phone"} href={"tel:+79020970101 "}  style={{ color: '#000', fontSize: "28px"}} className='phone-ya'  rel="nofollow">
                      +7 (902) 097-01-01
              </a>
              <p style={{ color: '#000', fontSize: "12px"}}>Мы всегда на связи! Мы готовы подъехать в любую точку области и забрать Вас, или доставить посылку. <b>Звоните, Все персонально и анонимно.</b></p>
          </div>
          <Button   variant="contained" style={{backgroundColor: '#ffd913', color: '#000', width: '100%', textAlign: 'center'}} className='mb-3'> 
              <a title={"Telegramm"} href={"https://t.me/+79020970101 "} target="_blank" className='phone-ya'>
                      <Image src={"/telegram.png"} width='44' height='44' alt='phone' style={{display: 'inline-block'}}  rel="nofollow"/>{" "}Написать в Telegram
              </a>
              </Button>
          <Button    variant="contained" style={{backgroundColor: '#ffd913', color: '#000', width: '100%', textAlign: 'center'}}  className='mb-3'>
              <a title={"Whatsapp"} href={"https://wa.me/+79020970101 "} target="_blank" className='phone-ya' >
                      <Image src={"/icons8-whatsapp1.png"} width='48' height='48' alt='phone' style={{display: 'inline-block'}}  rel="nofollow"/>{" "}Написать в Whatsapp
              </a>
          
          </Button>
      </Modal.Body>
      </Modal>







    <section id='tarifs' className='tarifs bg-gray-100'>
    <Container>
    <div className="wrap-template">
    <h2 className='wrap-template__title'>Тарифы:</h2>
      <Row className=''>
        <Col xs={12} md={3}>
            <motion.div className="practics-block box"   
            //  className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <h2>Стандарт</h2>
                <p>до 4-х посадочных мест</p>
                <Image src={Tstandart} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
                <p><b>Цена:</b> 28* руб./км.</p>
                <p>Kia Rio, VW Polo, Solaris, Rapid и аналоги</p>
                {/* < */}
                <Button className='tarifs__button'  onClick={handleShow}>Заказать</Button>
            </motion.div>
        </Col>
        <Col xs={12} md={3}>

            <motion.div className="practics-block box"   
            //  className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <h2>Комфорт</h2>
                <p>до 3-х посадочных мест</p>
                <Image src={Tkomfort} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
                <p><b>Цена:</b> 32* руб./км.</p>
                <p>Skoda Octavia, Hyundai Elantra и аналоги</p>
                <Button className='tarifs__button'  onClick={handleShow}>Заказать</Button>
            </motion.div>
        </Col>
        <Col xs={12} md={3}>

            <motion.div className="practics-block box"   
            //  className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <h2>Комфорт+</h2>
                <p>до 3-х посадочных мест</p>
                <Image src={TkomfortPlus} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
                <p><b>Цена:</b> 36* руб./км.</p>
                <p>Toyota Camry и другие премиальные авто</p>
                <Button className='tarifs__button'  onClick={handleShow}>Заказать</Button>
            </motion.div>
        </Col>
        <Col xs={12} md={3}>

            <motion.div className="practics-block box"   
            //  className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <h2>Минивен</h2>
                <p>до 8-х посадочных мест</p>
                <Image src={Miniven} alt='такси межгород' className='tarifs__image-tarif' sizes="100vw"/>
                <p><b>Цена:</b> 45* руб./км.</p>
                <p>Toyota Alphard, Hyundai H1 и аналоги</p>
                <Button className='tarifs__button'  onClick={handleShow}>Заказать</Button>
            </motion.div>
          </Col>
      </Row>
    </div>
  </Container>
  </section>
</>
  );
}
