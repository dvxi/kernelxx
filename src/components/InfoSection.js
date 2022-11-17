import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { IoSchoolOutline, IoLaptopOutline, IoConstructOutline } from 'react-icons/io5';

const InfoSection = () => {

    const cards = [
        {
            icon: <IoSchoolOutline className="me-3" />,
            title: '10',
            text: 'róznych wykładów'
        },
        {
            icon: <IoConstructOutline className="me-3" />,
            title: '2',
            text: 'warsztaty do wyboru'
        },
        {
            icon: <IoLaptopOutline className="me-3" />,
            title: '9',
            text: 'firm z branzy IT'
        }
    ]

    return (
        <div>
        <Container className="py-5" id="info">
            <Row className="text-center">
                <Col xs={9} lg={6} className="mx-auto">
                    <h2>Co będzie na wydarzeniu?</h2>
                    <p className="lead">
                        Wydarzenie obejmować będzie 2 równoległe serie wykładów, oraz warsztaty.
                        To pierwsze wydarzenie tego rodzaju w historii istnienia koła więc nie może Cie zabraknąć!
                    </p>
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
            <Row className="text-center my-5">
                <Col xs={9} lg={6} className="mx-auto">
                    <h2>Wspierają nas</h2>
                    <p className="lead">
                        Ponizej znajdziesz listę firm, które pomogły nam zorganizować to wydarzenie
                    </p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col className="d-flex align-items-center bg-white rounded mx-3 px-5">
                    <Image
                        src="wpengine.png" fluid/>
                </Col>
                <Col className="d-flex align-items-center bg-white rounded mx-3 px-5">
                    <Image
                        src="deployed.png" fluid/>
                </Col>
                <Col className="d-flex align-items-center bg-white rounded mx-3 px-5">
                    <Image
                        src="grafana.png" fluid/>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default InfoSection;