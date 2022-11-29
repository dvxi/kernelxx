import React from 'react';
import {Container, Row, Col, Image, Carousel, Card} from 'react-bootstrap';

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
          <Row className="my-5 my-lg-0" style={{ alignContent: 'center', justifyContent: 'center', height: '100%' }}>
            <Col xs={12} lg={6} className="mb-5" data-aos="fade-right">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{
                position: 'absolute' ,
                left: 0,
                marginTop: -100,
                height: '70vh',
                zIndex: -1
              }}>
              <path fill="#08BDBA" d="M72.3,-19.3C82,6.3,70,43.1,49.2,55.2C28.5,67.3,-1.1,54.8,-26.4,36.4C-51.7,18,-72.7,-6.2,-67.5,-25.5C-62.4,-44.9,-31.2,-59.3,0,-59.3C31.3,-59.3,62.6,-44.9,72.3,-19.3Z" transform="translate(100 100)" />
              </svg>
              <h1 className='display-1' style={{ fontWeight: 600 }}>Kernel20</h1>
              <p className="lead">
                To oficjalna, otwarta Konferencja IT, zorganizowana w ramach obchodów Jubileuszu XX-lecia działalności Koła Naukowego Informatyków Kernel
              </p>

            </Col>
            <Col xs={12} lg={6}></Col>
            {/*<Col>
              <Row className="justify-content-center">

                partners.map((partner) => (
                    <Col xs={4} lg={1} className="d-flex align-items-center bg-white rounded m-2 px-3 py-3">
                        <Image
                            src={partner} fluid/>
                    </Col>
                ))
              }
              </Row>
            </Col> */}
          </Row>

        </Container>
        <Row className="text-center my-5 justify-content-center">
          <Col>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{
                  position: 'absolute' ,
                  height: '70vh',
                  zIndex: -1
                }}>
            <path fill="#08BDBA" d="M72.3,-19.3C82,6.3,70,43.1,49.2,55.2C28.5,67.3,-1.1,54.8,-26.4,36.4C-51.7,18,-72.7,-6.2,-67.5,-25.5C-62.4,-44.9,-31.2,-59.3,0,-59.3C31.3,-59.3,62.6,-44.9,72.3,-19.3Z" transform="translate(100 100)" />
            </svg>
            <h3 style={{ fontWeight: 700 }}>
              3 grudnia 2022r
            </h3>
            <h4 style={{ fontWeight: 600 }}>
              10:00- 16:00
            </h4>
            <p className="lead mb-0">
              Budynek D-10 AGH <br/>
                ul. Reymonta 19, Kraków
            </p>
          </Col>
        </Row>
        </div>
    );
}

export default WelcomeSection;