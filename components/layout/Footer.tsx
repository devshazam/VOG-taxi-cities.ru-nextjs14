import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Footer() {

  return (

      <footer className='footer '>
          <div >
              <Container>
                <div className="footer__wrapper">
                  <Row className=''>
                   
                    <Col xs={12} md={4}>
                      <div className="wrapper-footer-content">
                        <p><b>Документы</b></p>
                        <ul>
                          <li>Политика конфиденциальности</li>
                        </ul>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                    <div className="wrapper-footer-content">
                        <p><b>Примечания</b></p>
                        <ul>
                        <li>Работаем с корпоративными клиентами!</li>

                        </ul>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div className="wrapper-footer-content">
                        <p><b>Контакты</b></p>
                        <ul>
                          <li><a href='tel:+79034780554' style={{color: 'black', textDecoration: 'none'}}>+7 (903) 111-11-11</a></li>
                          <li><a href='tel:+79297873000' style={{color: 'black', textDecoration: 'none'}}>+7 (929) 111-11-11</a></li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                
                <p style={{fontSize: 14}}>* Стоимость километра по территории ДНР и ЛНР равна 70 рублей!</p>
                </div>
              </Container>
          </div>
      </footer>


  );
}
