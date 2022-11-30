import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

export default function Jobboard() {

    const offers = [
        {
            job: "Software Engineer (Node.js/Kubernetes/Cloud/DevOps)",
            company: "WP Engine",
            companyDescription: "We’re a new breed of technology company, operating at the intersection of software innovation and service.\nOur managed WordPress Digital Experience Platform (DXP) powers amazing web experiences that drive businesses forward faster. We provide the whole infrastructure dedicated to the WordPress platform for more than 175,000 customers in 150 countries that makes us one of the biggest hosting providers for WordPress in the world. We operate globally, with our hubs located in the US, the UK, Australia, Ireland, and Poland - the newest R&D Hub with nearly 40 employees (and growing).\nDesign and engineer the systems that deliver 10,000,000,000 requests daily, across the globe. Create the products that delight marketers and web developers with their utility and innovation. Build the engine that drives everything we are.",
            skills: [
                "Node.js",
                "JavaScript",
                "Git/GitHub",
                "CI/CD",
                "REST APIs",
                "Kubernetes",
                "Terraform",
                "GCP",
                "Golang",
                "Ruby",
                "SQL",
                "Agile and Scrum"
            ],
            link: "https://wpengine.wd1.myworkdayjobs.com/WP_Engine/job/Krakow/Software-Engineer_JR101574"
        },
        {
            job: "Engineering Intern",
            company: "WP Engine",
            companyDescription: "We’re a new breed of technology company, operating at the intersection of software innovation and service.\nOur managed WordPress Digital Experience Platform (DXP) powers amazing web experiences that drive businesses forward faster. We provide the whole infrastructure dedicated to the WordPress platform for more than 175,000 customers in 150 countries that makes us one of the biggest hosting providers for WordPress in the world. We operate globally, with our hubs located in the US, the UK, Australia, Ireland, and Poland - the newest R&D Hub with nearly 40 employees (and growing).\nDesign and engineer the systems that deliver 10,000,000,000 requests daily, across the globe. Create the products that delight marketers and web developers with their utility and innovation. Build the engine that drives everything we are.",
            skills: [
                "Interested in Go",
                "Interested in JavaScript",
                "Interested in Python",
                "Interested in NodeJS",
                "Interested in GCP",
                "Interested in AWS"
            ],
            link: "https://wpengine.wd1.myworkdayjobs.com/WPEngine_Intern_Jobs/job/Krakow/Engineering-Intern_JR101646"
        },
    ]

  return (
    <Container style={{ height: '100vh' }}>
        <div data-aos="fade-right" className="display-md-block d-none d-lg-block" style={{
            position: 'fixed',
            top: '30%',
            width: '40vw'
        }}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{
            position: 'absolute' ,
            left: 0,
            marginTop: -100,
            height: '70vh',
            zIndex: -1
            }}>
            <path fill="#FF0066" d="M72.3,-19.3C82,6.3,70,43.1,49.2,55.2C28.5,67.3,-1.1,54.8,-26.4,36.4C-51.7,18,-72.7,-6.2,-67.5,-25.5C-62.4,-44.9,-31.2,-59.3,0,-59.3C31.3,-59.3,62.6,-44.9,72.3,-19.3Z" transform="translate(100 100)" />
            </svg>
            <h1 className='display-1' style={{ fontWeight: 600 }}>Jobboard</h1>
            <p className="lead">
            Tutaj znajdziesz oferty pracy przygotowane przez naszych prelegentów.
            </p>
        </div>
        <Row className="my-5 my-lg-0 d-block d-lg-none" style={{paddingTop: 100}}>
            <Col xs={12} lg={6} className="mb-5" data-aos="fade-right">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{
                position: 'absolute' ,
                left: 0,
                marginTop: -100,
                height: '70vh',
                zIndex: -1
              }}>
              <path fill="#FF0066" d="M72.3,-19.3C82,6.3,70,43.1,49.2,55.2C28.5,67.3,-1.1,54.8,-26.4,36.4C-51.7,18,-72.7,-6.2,-67.5,-25.5C-62.4,-44.9,-31.2,-59.3,0,-59.3C31.3,-59.3,62.6,-44.9,72.3,-19.3Z" transform="translate(100 100)" />
              </svg>
                <h1 className='display-1' style={{ fontWeight: 600 }}>Jobboard</h1>
                <p className="lead">
                Tutaj znajdziesz oferty pracy przygotowane przez naszych prelegentów.
                </p>
            </Col>
        </Row>


        <Col xs={12} lg={{span: 6, offset: 6}}>
            <Row style={{ height: '100vh', paddingTop: '20vh', paddingBottom: '40vh'}}>
                {
                    offers.map((offer) => (
                        <Card bg="dark" className="my-3" style={{ display: 'inline-block', float: 'none'}}>
                            <Card.Body>
                                <h4>{offer.job}</h4>
                                <p class="lead">{offer.company}</p>
                                <p>{offer.companyDescription}</p>
                                <h5 className="fw-bold">Wymagane</h5>
                                {
                                    offer.skills.map((skill) => (
                                        <Badge bg="dark" className="m-1 p-2 border border-primary" style={{ borderWidth: 1, borderColor: "#FF0066" }}>{skill}</Badge>
                                    ))
                                }
                                <a href={offer.link} target="_blank">
                                    <Button className="px-5 mt-3 text-white fw-bold btn-primary btn-block" style={{ borderColor: "#FF0066", width: '100%' }}>Więcej</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    ))
                }
            </Row>
        </Col>
    </Container>
  )
}
