import React from 'react';
import {Container, Row, Col, Card, Image} from 'react-bootstrap';
import { IoLaptopOutline, IoGlobeOutline } from 'react-icons/io5';
import { SiExpo, SiOculus, SiGrafana } from 'react-icons/si';
import { GiRobotGrab } from 'react-icons/gi';
import { BsFillCartFill, BsBug, BsPauseBtnFill, BsCalculatorFill } from 'react-icons/bs';
import { MdAspectRatio } from 'react-icons/md';

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

const AgendaSection = (props) => {

    const events = {
        A: [
            {
                name: 'Allegro',
                time: '10:00 - 11:00',
                icon: <BsFillCartFill/>,
                author: '',
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            },
            {
                name: 'Deployed',
                time: '11:00 - 12:00',
                icon: <MdAspectRatio/>,
                author: '',
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            },
            {
                name: 'Grafana',
                time: '12:00 - 13:00',
                icon: <SiGrafana/>,
                author: '',
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            },
            {
                name: 'WP Engine',
                time: '13:00 - 14:00',
                icon: <IoLaptopOutline/>,
                author: '',
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            },
            {
                name: 'Expo',
                time: '14:00 - 15:00',
                icon: <SiExpo/>,
                author: '',
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            },
            {
                name: 'Niebezpiecznik',
                time: '15:00 - 16:00',
                icon: <BsBug/>,
                author: '',
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            }
        ],
        B: [
            {
                name: 'ABB',
                time: '10:00 - 11:00',
                icon: <GiRobotGrab/>,
                author: '',
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            },
            {
                name: 'Cyfronet AGH',
                time: '11:00 - 12:00',
                icon: <BsCalculatorFill/>,
                author: '',
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            },
            {
                name: 'Przerwa',
                time: '12:00 - 13:00',
                icon: <BsPauseBtnFill/>,
                author: '',
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            },
            {
                name: 'KN BIT',
                time: '13:00 - 14:00',
                icon: <IoLaptopOutline/>,
                author: 'Szymon Rusiecki',
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            }
        ]
    }

    const courses = {
        A: [
            {
                name: 'Deployed',
                time: '12:00 - 14:00',
                icon: <MdAspectRatio/>,
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            }
        ],
        B: [
            {
                name: 'Allegro',
                time: '12:00 - 14:00',
                icon: <BsFillCartFill/>,
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
            }
        ],
        C: [
            {
                name: 'Sala VR/AR',
                time: '10:00 - 16:00',
                icon: <SiOculus/>,
                description: 'Opis wydarzenia pojawi się wkrótce. Obserwuj nasz profil na facebooku aby być na bieżąco!',
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
                                    <p class="text-secondary d-none d-lg-block">Temat warsztatów pojawi się w krótce. Obserwujcie nasz profil na Facebooku po najświesze aktualizacje!</p>
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
                                    <p class="text-secondary d-none d-lg-block">Temat warsztatów pojawi się w krótce. Obserwujcie nasz profil na Facebooku po najświesze aktualizacje!</p>
                                </div>
                            </Col>
                        </Row>
                    ))
                }
                </Col>
                <Col>
                <h2 className='text-center mb-5'>Sala 204</h2>
                {
                    courses.C.map((event) => (
                        <Row className="my-3" onClick={() => props.handleModal(event)}>
                            <Col xs={4} lg={3} className="text-end">
                                <h5 className="display-6">{event.icon}</h5>
                            </Col>
                            <Col xs={8} lg={9} className="d-flex align-items-center">
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
            </Row>
            <Row className="text-center">
                <Col xs={9} lg={6} className="mx-auto">
                    <h2>Prelegenci</h2>
                    <p className="lead">
                        Wiedzą podzielą się specjaliści z najwyższej półki
                    </p>
                </Col>
            </Row>

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

        </Container>
    );
}

export default AgendaSection;