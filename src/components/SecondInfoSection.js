import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { IoSchoolOutline, IoLaptopOutline, IoConstructOutline } from 'react-icons/io5';

const SecondInfoSection = () => {

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
    
return (
    <div>
    <Container>
        <Row className="text-center my-5">
                <Col xs={12} lg={6} className="mx-auto">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{
                    position: 'absolute',
                    marginTop: -100,
                    left: '35%',
                    height: '50vh',
                    width: '50vw',
                    zIndex: -1
                }}>
                <path fill="#0F62FE" d="M46.7,-56.5C58,-46.2,62.9,-29.1,65.7,-11.8C68.5,5.5,69.3,23,62.6,37.5C55.8,52,41.6,63.6,26.1,67.4C10.5,71.2,-6.3,67.3,-21.8,61.2C-37.3,55,-51.6,46.5,-64.1,33C-76.6,19.6,-87.3,1.1,-83.5,-13.7C-79.7,-28.6,-61.3,-39.9,-45,-49.2C-28.6,-58.6,-14.3,-66.1,1.7,-68.1C17.7,-70.1,35.4,-66.7,46.7,-56.5Z" transform="translate(100 100)" />
                </svg>
                    <div data-aos="fade-left">
                        <h2>Prelegenci</h2>
                        <p className="lead">
                            Prelegenci z czołowych firm zapewnią <br/>
                            wartościową wiedzę przez cały dzień
                        </p>
                    </div>
                </Col>
      </Row>
      <Row className="justify-content-center">
              {
                partners.map((partner) => (
                    <Col xs={4} lg={1} className="d-flex align-items-center bg-white rounded m-2 px-3 py-3" data-aos="zoom-in">
                        <Image
                            src={partner} fluid/>
                    </Col>
                ))
              }
      </Row>
      <Row className="text-center my-5">
        <Col xs={12} lg={6} className="mx-auto">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{
                        position: 'absolute',
                        marginTop: -100,
                        left: '20%',
                        height: '50vh',
                        width: '50vw',
                        zIndex: -1
                    }}>
            <path fill="#08BDBA" d="M29.3,-49.2C39.7,-44.7,51.1,-40.4,60.6,-32.2C70.1,-24.1,77.7,-12,78.5,0.5C79.3,13,73.4,26,63.7,33.8C54.1,41.7,40.6,44.4,29.4,54.4C18.1,64.4,9.1,81.6,-2.3,85.7C-13.7,89.7,-27.5,80.6,-41.6,72.3C-55.8,63.9,-70.3,56.5,-78.8,44.5C-87.3,32.6,-89.7,16.3,-88.3,0.8C-86.8,-14.6,-81.4,-29.3,-73,-41.2C-64.5,-53.2,-53,-62.5,-40.3,-65.7C-27.6,-68.9,-13.8,-66,-2.2,-62.2C9.4,-58.4,18.8,-53.7,29.3,-49.2Z" transform="translate(100 100)" />
        </svg>
            <div data-aos="fade-right">
                <h2>Save the date</h2>
                <p className="lead">
                Zapraszamy wszystkich zainteresowanych, <b>nie tylko studentów</b>. <br/><br/>Wstęp <b>wolny</b>
                </p>
            </div>
        </Col>
      </Row>
      <Row className="text-center my-5 justify-content-center">
        <Col xs={8} lg={6} className="mb-5">
          <Card className="p-3 text-black mb-5" style={{ borderRadius: 15 }} data-aos="zoom-in">
            <Card.Body>
                <h3 style={{ fontWeight: 700 }}>
                3 grudnia 2022r
                </h3>
              <p className="lead mb-0">
                  Budynek D-10 AGH
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      <Container flex className="text-center py-2">
        <p>Projekt i wykonanie: <a rel="nofollow" href="https://www.linkedin.com/in/szymongwozdz/" style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 600,
        }}>Szymon Gwóźdź</a></p>
      </Container>
    </div>
    );
}

export default SecondInfoSection;