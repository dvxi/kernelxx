import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

function WelcomeSection() {
    return (
        <div>
        <Container className="vh-100">
          <Row style={{ alignContent: 'center', height: '100%' }}>
            <Col xs={12} lg={6} className="mb-5">
              <h1 className='display-1' style={{ fontWeight: 600 }}>Kernel20</h1>
              <p className="lead">

              </p>
            </Col>
            <Col xs={12} lg={6}></Col>
            <Col>
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
            </Col>
          </Row>
        </Container>
        </div>
    );
}

export default WelcomeSection;