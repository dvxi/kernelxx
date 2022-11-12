import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { IoLaptopOutline } from 'react-icons/io5';

const AgendaSection = (props) => {

    const events = {
        A: [
            {
                name: 'NFT',
                time: '8:00 - 9:00',
                icon: <IoLaptopOutline/>,
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl leo, lobortis a nisl efficitur, efficitur sagittis quam. Curabitur at ligula id tellus elementum rhoncus at vitae risus. Vestibulum eu eros non erat vulputate pellentesque. Donec justo ex, sollicitudin ut venenatis eget, viverra et erat. Curabitur eu tincidunt risus, sed volutpat massa. Ut augue nisi, faucibus et posuere quis, iaculis id eros. Cras nunc justo, fermentum nec lectus ac, fringilla vehicula magna. Phasellus felis est, tempus vel nunc sed, vestibulum scelerisque lectus. Praesent sollicitudin leo sit amet metus semper luctus. Mauris commodo lacus et magna feugiat aliquet. Maecenas quis imperdiet mi, vel sollicitudin ante. Phasellus et accumsan metus, vel ultrices eros. Morbi gravida ligula et pharetra aliquam.`
            },
            {
                name: 'NFT',
                time: '8:00 - 9:00',
                icon: <IoLaptopOutline/>
            },
            {
                name: 'NFT',
                time: '8:00 - 9:00',
                icon: <IoLaptopOutline/>
            },
            {
                name: 'NFT',
                time: '8:00 - 9:00',
                icon: <IoLaptopOutline/>
            }
        ],
        B: [
            {
                name: 'NFT',
                time: '8:00 - 9:00',
                icon: <IoLaptopOutline/>
            },
            {
                name: 'NFT',
                time: '8:00 - 9:00',
                icon: <IoLaptopOutline/>
            },
            {
                name: 'NFT',
                time: '8:00 - 9:00',
                icon: <IoLaptopOutline/>
            },
            {
                name: 'NFT',
                time: '8:00 - 9:00',
                icon: <IoLaptopOutline/>
            }
        ]
    }

    return (
        <Container className="py-5" id="agenda">
            <Row className="text-center">
                <Col xs={9} lg={6} className="mx-auto">
                    <h2>Agenda</h2>
                    <p className="lead">
                        Poniżej znajdziesz listę wydarzeń,
                        które zaplanowaliśmy na ten wyjątkowy dzień
                    </p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                <h2 className='text-center mb-5'>Sala A</h2>
                {
                    events.A.map((event) => (
                        <Row className="my-3" onClick={() => props.handleModal(event)}>
                            <Col xs={8} lg={9} className="d-flex align-items-center">
                                <div className='w-100 text-end'>
                                    <h3 className="mb-0">{event.name}</h3>
                                    <p class="lead mb-0">{event.time}</p>
                                    <p class="text-secondary d-none d-lg-block">Wykład poprowadzi specjalista z branży Adrian Żarno. Opowie nam o...</p>
                                </div>
                            </Col>
                            <Col xs={4} lg={3}>
                                <Card bg='dark' className="p-lg-3" style={{ 'border-radius': '15px' }}>
                                    <Card.Body className="text-center display-lg-6">
                                        <h3 className="display-6">{event.icon}</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ))
                }
                </Col>
                <Col>
                <h2 className='text-center mb-5'>Sala B</h2>
                {
                    events.B.map((event) => (
                        <Row className="my-3" onClick={() => props.handleModal(event)}>
                            <Col xs={4} lg={3}>
                                <Card bg='dark' className="p-lg-3" style={{ 'border-radius': '15px' }}>
                                    <Card.Body className="text-center">
                                        <h3 className="display-6">{event.icon}</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={8} lg={9} className="d-flex align-items-center">
                                <div>
                                    <h3 className="mb-0">{event.name}</h3>
                                    <p class="lead mb-0">{event.time}</p>
                                    <p class="text-secondary d-none d-lg-block">Wykład poprowadzi specjalista z branży Adrian Żarno. Opowie nam o...</p>
                                </div>
                            </Col>
                        </Row>
                    ))
                }
                </Col>
            </Row>
        </Container>
    );
}

export default AgendaSection;