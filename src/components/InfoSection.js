import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { IoSchool } from 'react-icons/io5';

const InfoSection = () => {

    const cards = [
        {
            icon: <IoSchool className="me-3" />,
            title: '10h+',
            text: 'wykładów'
        },
        {
            icon: <IoSchool className="me-3" />,
            title: '10h+',
            text: 'wykładów'
        },
        {
            icon: <IoSchool className="me-3" />,
            title: '10h+',
            text: 'wykładów'
        },
        {
            icon: <IoSchool className="me-3" />,
            title: '10h+',
            text: 'wykładów'
        },
    ]

    return (
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
            <Row className="mt-5">
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
    );
}

export default InfoSection;