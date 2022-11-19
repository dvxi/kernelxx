import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { IoSchoolOutline, IoLaptopOutline, IoConstructOutline } from 'react-icons/io5';
import { SiOculus } from 'react-icons/si';

const InfoSection = () => {

    const cards = [
        {
            icon: <IoSchoolOutline className="me-3" />,
            title: '10',
            text: 'Róznych wykładów'
        },
        {
            icon: <IoConstructOutline className="me-3" />,
            title: '2',
            text: 'Warsztaty do wyboru'
        },
        {
            icon: <IoLaptopOutline className="me-3" />,
            title: '8',
            text: 'Firm z branzy IT'
        },
        {
            icon: <SiOculus className="me-3" />,
            title: '15',
            text: 'Stanowisk z goglami VR'
        }
    ]

    return (
        <div>
        <Container className="py-5" id="info">
            <Row className="text-center">
                <Col xs={9} lg={6} className="mx-auto">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{
                        position: 'absolute',
                        marginTop: -100,
                        left: '35%',
                        height: '50vh',
                        width: '50vw',
                        zIndex: -1
                    }}>
                        <path fill="#8A3FFC" d="M41,-44C56.5,-35.8,75,-26.1,78.4,-12.9C81.9,0.4,70.5,17.2,57.9,28.1C45.3,39,31.5,43.8,18.3,47.4C5.1,50.9,-7.5,53.1,-22.7,52C-37.9,51,-55.6,46.7,-63.6,35.5C-71.5,24.3,-69.6,6.2,-66.6,-11.9C-63.6,-30,-59.6,-48.1,-48.3,-57.1C-37,-66.1,-18.5,-66.1,-2.9,-62.6C12.7,-59.2,25.4,-52.3,41,-44Z" transform="translate(100 100)" />
                    </svg>
                    <div data-aos="fade-left">
                        <h2>Co będzie na wydarzeniu?</h2>
                        <p className="lead">
                            Wydarzenie obejmować będzie 2 równoległe serie wykładów, oraz warsztaty.
                            To pierwsze wydarzenie tego rodzaju w historii istnienia koła więc nie może Cie zabraknąć!
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center">
            {
                cards.map((card) => (
                    <Col xs={6} lg={3} className="my-3" data-aos="fade-up">
                        <Card bg="dark" className="p-3" style={{ 'border-radius': '20px' }}>
                            <Card.Body>
                                <Card.Title className="display-6">
                                    {card.icon}
                                    {card.title}
                                </Card.Title>
                                <Card.Text>
                                    {card.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
            </Row>
            <Row className="text-center my-5">
                <Col xs={9} lg={6} className="mx-auto">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{
                    position: 'absolute',
                    marginTop: -100,
                    left: '20%',
                    height: '50vh',
                    width: '50vw',
                    zIndex: -1
                }}>
                    <path fill="#F1C21B" d="M41.6,-46.7C54.7,-38.6,66.6,-26.2,71.7,-10.7C76.7,4.8,74.7,23.4,64.8,34.4C54.9,45.3,36.9,48.6,21.3,51.2C5.6,53.8,-7.6,55.6,-23.7,54.4C-39.7,53.2,-58.6,48.9,-66.2,37.4C-73.8,25.9,-70.3,7,-66.4,-11.1C-62.5,-29.3,-58.2,-46.8,-47.1,-55.3C-36,-63.8,-18,-63.2,-1.9,-61C14.3,-58.8,28.5,-54.9,41.6,-46.7Z" transform="translate(100 100)" />
                </svg>
                    <div data-aos="fade-right">
                        <h2>Wspierają nas</h2>
                        <p className="lead">
                            Ponizej znajdziesz listę firm, które pomogły nam zorganizować to wydarzenie
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={8} lg={3} className="px-3 d-flex justify-content-center my-2 jumpy" data-aos="zoom-in">
                    <Image style={{ borderRadius: 15 }}
                        src="nokia.jpg" fluid/>
                </Col>
                <Col xs={8} lg={3} className="px-3 d-flex justify-content-center my-2 jumpy" data-aos="zoom-in">
                    <Image style={{ borderRadius: 15 }}
                        src="wpengine.png" fluid/>
                </Col>
                <Col xs={8} lg={3} className="px-3 d-flex justify-content-center my-2 jumpy" data-aos="zoom-in">
                    <Image style={{ borderRadius: 15 }}
                        src="deployed.png" fluid/>
                </Col>
                <Col xs={8} lg={3} className="px-3 d-flex justify-content-center my-2 jumpy" data-aos="zoom-in">
                    <Image style={{ borderRadius: 15 }}
                        src="grafana.png" fluid/>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default InfoSection;