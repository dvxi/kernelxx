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
                    <h2>Co to Kernel20?</h2>
                    <p className="lead">
                        To oficjalna, otwarta Konferencja IT, zorganizowana w ramach obchodów Jubileuszu XX-lecia działalności Koła Naukowego Informatyków Kernel.
                    </p>
                </Col>
            </Row>
            <Row className="text-center my-5">
                <Col xs={9} lg={6} className="mx-auto">
                    <h2>Wspierają nas</h2>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={12} lg={6} className="px-5 d-flex justify-content-center my-2">
                    <Image style={{ borderRadius: 15 }}
                           src="wpengine.png" fluid/>
                </Col>
            </Row>
            <Row style={{height:20}}>

            </Row>
            <Row className="d-flex justify-content-center">

                <Col xs={12} lg={4} className="px-5 d-flex justify-content-center my-2">
                    <Image style={{ borderRadius: 15 }}
                        src="nokia.webp" fluid/>
                </Col>
                <Col xs={12} lg={4} className="px-5 d-flex justify-content-center my-2">
                    <Image style={{ borderRadius: 15 }}
                        src="deployed.png" fluid/>
                </Col>
                <Col xs={12} lg={4} className="px-5 d-flex justify-content-center my-2">
                    <Image style={{ borderRadius: 15 }}
                           src="grafana.png" fluid/>
                </Col>
            </Row>

            <Row className="text-center my-5">
                <Col xs={9} lg={6} className="mx-auto">
                    <h2>Wartościowa wiedza z różnych obszarów IT w jednym miejscu</h2>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center">
                {
                    cards.map((card) => (
                        <Col xs={6} lg={3} className="my-3">
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

        </Container>
        </div>
    );
}

export default InfoSection;