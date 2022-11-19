import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { IoLaptopOutline, IoGlobeOutline } from 'react-icons/io5';
import { SiExpo, SiOculus, SiGrafana } from 'react-icons/si';
import { GiRobotGrab } from 'react-icons/gi';
import { BsFillCartFill, BsBug, BsPauseBtnFill, BsCalculatorFill } from 'react-icons/bs';
import { MdAspectRatio } from 'react-icons/md';

const AgendaSection = (props) => {

    const events = {
        A: [
            {
                name: 'Allegro',
                time: '10:00 - 11:00',
                icon: <BsFillCartFill/>,
                author: '',
            },
            {
                name: 'Deployed',
                time: '11:00 - 12:00',
                icon: <MdAspectRatio/>,
                author: '',
            },
            {
                name: 'Grafana',
                time: '12:00 - 13:00',
                icon: <SiGrafana/>,
                author: '',
            },
            {
                name: 'WP Engine',
                time: '13:00 - 14:00',
                icon: <IoLaptopOutline/>,
                author: '',
            },
            {
                name: 'Expo',
                time: '14:00 - 15:00',
                icon: <SiExpo/>,
                author: '',
            },
            {
                name: 'Niebezpiecznik',
                time: '15:00 - 16:00',
                icon: <BsBug/>,
                author: '',
            }
        ],
        B: [
            {
                name: 'ABB',
                time: '10:00 - 11:00',
                icon: <GiRobotGrab/>,
                author: '',
            },
            {
                name: 'Cyfronet',
                time: '11:00 - 12:00',
                icon: <BsCalculatorFill/>,
                author: '',
            },
            {
                name: 'Przerwa',
                time: '12:00 - 13:00',
                icon: <BsPauseBtnFill/>,
                author: '',
            },
            {
                name: 'KN BIT',
                time: '13:00 - 14:00',
                icon: <IoLaptopOutline/>,
                author: 'Szymon Rusiecki',
            }
        ]
    }

    const courses = {
        A: [
            {
                name: 'Deployed',
                time: '12:00 - 14:00',
                icon: <MdAspectRatio/>
            }
        ],
        B: [
            {
                name: 'Allegro',
                time: '12:00 - 14:00',
                icon: <BsFillCartFill/>
            }
        ],
        S204: [
            {
                name: 'Sala VR/AR',
                time: '10:00 - 16:00',
                icon: <SiOculus/>
            }
        ]
    }

    return (
        <Container className="py-5" id="agenda">
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
                        <path fill="#24A148" d="M49.8,-53.9C66.1,-45.7,82.1,-31.5,83.3,-15.9C84.6,-0.4,71.2,16.5,57.8,27.5C44.5,38.5,31.1,43.6,16.9,50.5C2.7,57.4,-12.3,66.2,-28.5,65.8C-44.7,65.3,-62,55.6,-68.9,41.1C-75.7,26.5,-72,7.2,-64.3,-7C-56.6,-21.2,-44.9,-30.3,-33.5,-39.5C-22.1,-48.6,-11,-57.7,2.8,-61.1C16.7,-64.5,33.5,-62.2,49.8,-53.9Z" transform="translate(100 100)" />
                    </svg>
                    <div data-aos="fade-left">
                        <h2>Agenda</h2>
                        <p className="lead">
                            Poniżej znajdziesz listę wydarzeń,
                            które zaplanowaliśmy na ten wyjątkowy dzień
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                <h2 className='text-center mb-5'>Sala A</h2>
                {
                    events.A.map((event) => (
                        <Row className="my-3" data-aos="fade-up">
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
                        <Row className="my-3" data-aos="fade-up">
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
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{
                    position: 'absolute',
                    marginTop: -100,
                    left: '20%',
                    height: '50vh',
                    width: '50vw',
                    zIndex: -1
                }}>
                    <path fill="#FA4D56" d="M36.9,-44.6C50.6,-32.4,66.4,-23.5,70.9,-10.6C75.4,2.2,68.6,18.9,58.3,30.9C48.1,42.9,34.5,50.2,20.9,53.3C7.4,56.4,-6.2,55.4,-20.4,52C-34.7,48.6,-49.6,42.9,-61.9,31.1C-74.2,19.3,-84,1.4,-78.7,-11.3C-73.4,-24,-53.1,-31.6,-37.5,-43.5C-21.9,-55.3,-10.9,-71.6,0.3,-71.9C11.6,-72.3,23.1,-56.9,36.9,-44.6Z" transform="translate(100 100)" />
                </svg>
                    <div data-aos="fade-right">
                        <h2>Warsztaty</h2>
                        <p className="lead">
                            Poniżej znajdziesz listę warsztatów,
                            które zwieńczą ten pełen w wiedzę dzień
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col xs={12} sm={4}>
                <h2 className='text-center mb-lg-5'>Sala A</h2>
                {
                    courses.A.map((event) => (
                        <Row className="my-3 mb-5 mb-lg-3" data-aos="fade-up">
                            <Col xs={5} lg={3} className="text-end">
                                <h5 className="display-6">{event.icon}</h5>
                            </Col>
                            <Col xs={7} lg={9} className="d-flex align-items-center">
                                <div className='w-100'>
                                    <h5 className="mb-0">{event.name}</h5>
                                    <p class="mb-0">{event.time}</p>
                                    <p class="text-secondary d-none d-lg-block">Temat warsztatów pojawi się w krótce. Obserwujcie nasz profil na Facebooku po najświesze aktualizacje!</p>
                                </div>
                            </Col>
                        </Row>
                    ))
                }
                </Col>
                <Col xs={12} sm={4}>
                <h2 className='text-center mb-lg-5'>Sala 204</h2>
                {
                    courses.S204.map((event) => (
                        <Row className="my-3 mb-5 mb-lg-3" data-aos="fade-up">
                            <Col xs={5} lg={3} className="text-end">
                                <h5 className="display-6">{event.icon}</h5>
                            </Col>
                            <Col xs={7} lg={9} className="d-flex align-items-center">
                                <div>
                                    <h5 className="mb-0">{event.name}</h5>
                                    <p class="mb-0">{event.time}</p>
                                    <p class="text-secondary d-none d-lg-block">Chciałbyś zobaczyć jak działają gogle wirtualnej rzeczywistości? 
                                     Przez cały dzień masz niesamowitą okazję pobawić się wysokiej klasy sprzętem i stworzyć ciekawy projekt.</p>
                                </div>
                            </Col>
                        </Row>
                    ))
                }
                </Col>
                <Col xs={12} sm={4}>
                <h2 className='text-center mb-lg-5'>Sala B</h2>
                {
                    courses.B.map((event) => (
                        <Row className="my-3 mb-5 mb-lg-3" data-aos="fade-up">
                            <Col xs={5} lg={3} className="text-end">
                                <h5 className="display-6">{event.icon}</h5>
                            </Col>
                            <Col xs={7} lg={9} className="d-flex align-items-center">
                                <div>
                                    <h5 className="mb-0">{event.name}</h5>
                                    <p class="mb-0">{event.time}</p>
                                    <p class="text-secondary d-none d-lg-block">Temat warsztatów pojawi się w krótce. Obserwujcie nasz profil na Facebooku po najświesze aktualizacje!</p>
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