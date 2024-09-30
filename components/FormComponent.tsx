"use client";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function FormComponent() {

  return (
    <>
    <div id='order' className='bg-gray-100'>
        <Container>
        <div className="wrap-template">
        <h2 className='wrap-template__title'>Заказать:</h2>
          <Row>
                {/* <Col xs={12} md={8}> */}
                <Form noValidate 
            // validated={validated} onSubmit={handleSubmit} 
            action="https://formspree.io/f/mwpeedjj"
              method="POST">
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" >
                      <Form.Label  htmlFor="city1">От куда:</Form.Label>
                      <Form.Control type="text" placeholder="Москва" required  name="city1" id='city1'/>
                      <Form.Control.Feedback type="invalid">
                        Введите пожалуйста наименование.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label htmlFor="city2">Куда:</Form.Label>
                      <Form.Control type="text" placeholder="Казань" required  name="city2" id='city2'/>
                      <Form.Control.Feedback type="invalid">
                        Введите пожалуйста наименование.
                      </Form.Control.Feedback>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="12" >
                      <Form.Label htmlFor="phone">Контактный телефон:</Form.Label>
                      <Form.Control type="text" placeholder="+79991234567" required  name="phone"  id='phone'/>
                      <Form.Control.Feedback type="invalid">
                      Введите пожалуйста телефон.
                      </Form.Control.Feedback>
                    </Form.Group>

                  </Row>

                  <p style={{ fontSize: "12px", marginBottom: "10px"}}>* Нажимая отправить Вы соглашаетесь с политикой конфиденциальности</p>
                  <div className="d-grid gap-2">

                  <Button type="submit" size='lg' className='form__button'>Сделать заказ</Button>
                  </div>
                </Form>
                </Row>

          </div>

          </Container>
          </div>
    </>
  );
}
