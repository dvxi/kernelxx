import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { IoLaptopOutline, IoGlobeOutline } from 'react-icons/io5';
import { SiExpo } from 'react-icons/si';
import { GiRobotGrab } from 'react-icons/gi';

const AgendaSection = (props) => {

    const events = {
        A: [
            {
                name: 'Allegro',
                time: '10:00 - 11:00',
                icon: <IoLaptopOutline/>,
                author: 'Jan Kowalski',
            },
            {
                name: 'Deployed',
                time: '11:00 - 12:00',
                icon: <IoLaptopOutline/>,
                author: 'Jan Kowalski',
            },
            {
                name: 'Grafana',
                time: '12:00 - 13:00',
                icon: <IoLaptopOutline/>,
                author: 'Jan Kowalski',
            },
            {
                name: 'WP Engine',
                time: '13:00 - 14:00',
                icon: <IoLaptopOutline/>,
                author: 'Jan Kowalski',
            },
            {
                name: 'Expo',
                time: '14:00 - 15:00',
                icon: <SiExpo/>,
                author: 'Jan Kowalski',
            },
            {
                name: 'Niebezpiecznik',
                time: '15:00 - 16:00',
                icon: <IoGlobeOutline/>,
                author: 'Jan Kowalski',
            }
        ],
        B: [
            {
                name: 'ABB',
                time: '10:00 - 11:00',
                icon: <GiRobotGrab/>,
                author: 'Jan Kowalski',
            },
            {
                name: 'Cyfronet',
                time: '11:00 - 12:00',
                icon: <IoLaptopOutline/>,
                author: 'Jan Kowalski',
            },
            {
                name: 'Przerwa',
                time: '12:00 - 13:00',
                icon: <IoLaptopOutline/>,
                author: 'Jan Kowalski',
            },
            {
                name: 'Rusiek',
                time: '13:00 - 14:00',
                icon: <IoLaptopOutline/>,
                author: 'Jan Kowalski',
            }
        ]
    }

    const courses = {
        A: [
            {
                name: 'Deployed',
                time: '16:00 - 17:00',
                icon: <IoLaptopOutline/>
            }
        ],
        B: [
            {
                name: 'Allegro',
                time: '16:00 - 17:00',
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
                                    <h5 className="mb-0">{event.name}</h5>
                                    <p class="mb-0">{event.time}</p>
                                    <p class="text-secondary d-none d-lg-block">{event.author}</p>
                                </div>
                            </Col>
                            <Col xs={4} lg={3}>
                                <h3 className="display-6">{event.icon}</h3>
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
                            <Col xs={4} lg={3} className="text-end">
                                <h3 className="display-6">{event.icon}</h3>
                            </Col>
                            <Col xs={8} lg={9} className="d-flex align-items-center">
                                <div>
                                    <h5 className="mb-0">{event.name}</h5>
                                    <p class="mb-0">{event.time}</p>
                                    <p class="text-secondary d-none d-lg-block">{event.author}</p>
                                </div>
                            </Col>
                        </Row>
                    ))
                }
                </Col>
            </Row>
            <Row className="text-center my-5">
                <Col xs={9} lg={6} className="mx-auto">
                    <h2>Warsztaty</h2>
                    <p className="lead">
                        Poniżej znajdziesz listę warsztatów,
                        które zwieńczą ten pełen w wiedzę dzień
                    </p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                <h2 className='text-center mb-5'>Sala A</h2>
                {
                    courses.A.map((event) => (
                            <Row className="my-3" onClick={() => props.handleModal(event)}>
                            <Col xs={8} lg={9} className="d-flex align-items-center">
                                <div className='w-100 text-end'>
                                    <h5 className="mb-0">{event.name}</h5>
                                    <p class="mb-0">{event.time}</p>
                                    <p class="text-secondary d-none d-lg-block">Warsztaty poprowadzi specjalista z branży Adrian Żarno. Opowie nam o...</p>
                                </div>
                            </Col>
                            <Col xs={4} lg={3}>
                                <h5 className="display-6">{event.icon}</h5>
                            </Col>
                        </Row>
                    ))
                }
                </Col>
                <Col>
                <h2 className='text-center mb-5'>Sala B</h2>
                {
                    courses.B.map((event) => (
                        <Row className="my-3" onClick={() => props.handleModal(event)}>
                            <Col xs={4} lg={3} className="text-end">
                                <h5 className="display-6">{event.icon}</h5>
                            </Col>
                            <Col xs={8} lg={9} className="d-flex align-items-center">
                                <div>
                                    <h5 className="mb-0">{event.name}</h5>
                                    <p class="mb-0">{event.time}</p>
                                    <p class="text-secondary d-none d-lg-block">Warsztaty poprowadzi specjalista z branży Adrian Żarno. Opowie nam o...</p>
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