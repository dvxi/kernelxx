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
            {/* <Col xs={12} lg={{ span: 4, offset: 2}} className="mt-5 mt-lg-0">
              {<Row xs="5" lg="2" className='d-flex flex-lg-wrap justify-content-end'>
                <Col className="mb-lg-3">
                    <Image
                    src="nvidia.png" rounded fluid/>
                </Col>
                <Col className="mb-lg-3">
                    <Image
                    src="nvidia.png" rounded fluid/>
                </Col>
                <Col className="mb-lg-3">
                    <Image
                    src="nvidia.png" rounded fluid/>
                </Col>
                <Col className="mb-lg-3">
                    <Image
                    src="nvidia.png" rounded fluid/>
                </Col>
                <Col className="mb-lg-3">
                    <Image
                    src="nvidia.png" rounded fluid/>
                </Col>
              </Row>}
            </Col> */}
          </Row>
          <Row className="d-flex flex-row flex-nowrap overflow-auto">
            {
              partners.map((partner) => (
                  <Col className="d-flex align-items-center bg-white rounded mx-1 px-3 py-3">
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
                    alt="First slide"
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