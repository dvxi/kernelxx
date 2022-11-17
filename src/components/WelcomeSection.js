import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

const partners = [
  'abb.png',
  'allegro.png',
  'cyfronet.png',
  'deployed.png',
  'expo.png',
  'grafana.png',
  'niebezpiecznik.png',
  'wpengine.png'
]

function WelcomeSection() {
    return (
        <div>
        <Container>
          <Row className="my-5">
            <Col xs={9} lg={6}>
              <h1 className='display-1'>KERNEL XX ROCZNICA DZIAŁALNOŚCI</h1>
            </Col>
          </Row>
          <Row className="d-flex flex-row flex-nowrap overflow-auto justify-content-center" style={{ marginTop: '200px' }}>
            {
              partners.map((partner) => (
                  <Col xs={3} lg={1} className="d-flex align-items-center bg-white rounded mx-1 px-3 py-3">
                      <Image
                          src={partner} fluid/>
                  </Col>
              ))
            }
          </Row>
          <Row className="my-5">
            <Col xs={12}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="car1.png"
                    alt="Uczestnicy na sali wykładowej"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
        </div>
    );
}

export default WelcomeSection;