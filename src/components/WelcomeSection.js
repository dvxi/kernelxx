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
        <Container className="vh-100">
          <Row style={{ alignContent: 'center', height: '100%' }}>
            <Col xs={12} lg={6} className="mb-5">
              <h1 className='display-1' style={{ fontWeight: 600 }}>Kernel20</h1>
              <p className="lead">
                To oficjalna, otwarta Konferencja IT, zorganizowana w ramach obchodów Jubileuszu XX-lecia działalności Koła Naukowego Informatyków Kernel
              </p>
            </Col>
            <Col xs={12} lg={6}></Col>
            <Col>
              <Row className="justify-content-center">
              {
                partners.map((partner) => (
                    <Col xs={4} lg={1} className="d-flex align-items-center bg-white rounded m-2 px-3 py-3">
                        <Image
                            src={partner} fluid/>
                    </Col>
                ))
              }
              </Row>
            </Col>
          </Row>
        </Container>
        </div>
    );
}

export default WelcomeSection;