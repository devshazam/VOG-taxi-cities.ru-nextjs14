"use client";

import { Col, Container, Row } from 'react-bootstrap';
import { motion, Variants } from "framer-motion";
import Image from 'next/image';

export default function ServiceGaranty() {

  const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return (
    <div className='service'>
    <Container >
          <div className="wrap-top-content">
            <div className="top-contene">
              <h2 className='section-grey_h2'>Гарантии высокого сервиса</h2>
              <p className='section-grey_text'>Наш опыт не находится в статике, ведь каждая жизненная ситуация, не смотря на аналогичные правовые нормы, индивилуальна!</p>
            </div>
          </div>
          <Row className='first-top-padding '>

            <Col xs={12} md={4}>
              <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
                > 
                  <motion.div variants={cardVariants} >
                    <Image src='/service/icons8-map-100.webp' width='100' height='100' alt='такси по России' />
                    {/* <Image src='https://img.icons8.com/3d-fluency/100/airplane-1.png' width='100' height='100' alt='такси по России' /> */}
                  </motion.div>
                  <p className='service__title'>По всей России </p>
                  <p>Мы выполняем обслуживание по территории всей Россиии + новые территории!</p>
              </motion.div>
            </Col>
            <Col xs={12} md={4}>
            <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
                > 
                 <motion.div variants={cardVariants} >
                    <Image src='/service/icons8-airplane-100.webp' width='100' height='100' alt='такси по России' />
                  </motion.div>
                  <p className='service__title'>Встреча в аэропорту</p>
                  <p>Мы можем встретить Вас в аэропорту и отвезти в любую точку России + новые территории!!</p>
                  </motion.div>
            </Col>
            <Col xs={12} md={4}>
            <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
                > 

                  <motion.div variants={cardVariants} >
                    <Image src='/service/icons8-suitcase-100.webp' width='100' height='100' alt='такси по России' />
                  </motion.div>
                  <p className='service__title'>Перевозка багажа</p>
                  <p>Доставим Ваш мелкогабаритный груз / багаж до любой точки России + новые территории!</p>
                  </motion.div>
            </Col>
          </Row>
        </Container>
        </div>
  );
}
