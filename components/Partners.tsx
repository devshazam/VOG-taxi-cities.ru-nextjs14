"use client";

import { Col, Container, Row } from 'react-bootstrap';

export default function Partners() {

  return (
    <div  className='partners'>
        <Container>
        <div className="wrap-template">
        <h2 className='wrap-template__title'>Партнеры:</h2>
                <Row>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                          <div className='wheely-znachok sprite'></div>
                          <p>Wheely</p>
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                          <div className='citymobil sprite'></div>
                          <p>СитиМобил</p>
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                          <div className='bolt sprite'></div>
                          <p>Bolt</p>
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                          <div className='didi sprite'></div>
                          <p>DiDI</p>
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                          <div className='gett sprite'></div>
                          <p>Gett</p>
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                          <div className='go sprite'></div>
                          <p>Яндекс GO</p>
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                          <div className='uber sprite'></div>
                          <p>Uber</p>
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                          <div className='indriver sprite'></div> 
                          <p>inDriver</p>
                      </div>
                  </Col>

                </Row>

          </div>
           
        </Container>
    </div>
  );
}
