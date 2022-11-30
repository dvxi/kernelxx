import { React, useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
//import {useState} from "@types/react";
import JobModal from '../components/JobModal';

export default function Jobboard() {

    const [modalJobShow, setModalJobShow] = useState(false);
    const [modalJobInfo, setModalJobInfo] = useState({});

    const handleJobModal = (modalInfo) => {
        setModalJobInfo(modalInfo);
        //console.log(modalInfo);
        setModalJobShow(true);
    }

    const offers = [
        {
            job: "Software Engineer (Node.js/Kubernetes/Cloud/DevOps)",
            company: "WP Engine",
            companyDescription: "We’re a new breed of technology company, operating at the intersection of software innovation and service.\nOur managed WordPress Digital Experience Platform (DXP) powers amazing web experiences that drive businesses forward faster. We provide the whole infrastructure dedicated to the WordPress platform for more than 175,000 customers in 150 countries that makes us one of the biggest hosting providers for WordPress in the world. We operate globally, with our hubs located in the US, the UK, Australia, Ireland, and Poland - the newest R&D Hub with nearly 40 employees (and growing).\nDesign and engineer the systems that deliver 10,000,000,000 requests daily, across the globe. Create the products that delight marketers and web developers with their utility and innovation. Build the engine that drives everything we are.",
            jobDescription: <text>WP Engine is on a mission to help our customers win online! Whether that’s helping an aspiring entrepreneur to turn a hobby into an online business or a multinational corporation to launch a new campaign in weeks instead of months, our platform is there to help them win — whatever that means for them. <br/><br/> At WP Engine, engineers help shape our future teams and technology vision in order to build meaningful products that improve the lives of our customers. Our culture is renowned; we believe it is important to hire the best and ensure that we provide an environment where the best get better. If you are great at solving problems, a hard worker with excellent interpersonal skills, and enjoy working across different time zones and cultures, you may be the engineer that we are looking for!<br/></text>,
            responsibility: <text>- Work as part of an agile development team to deliver impactful software rapidly and iteratively

                <br/>- Write, test, and maintain software applications that are resilient, robust, and perform at scale

                <br/>- Work closely with business partners to incrementally deliver positive customer inspired outcomes through technology

                <br/>- Constantly look for opportunities to improve operational effectiveness through automation and optimization of code

                <br/>- Encourage and drive the implementation of best engineering practices<br/></text>,
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
            skillDesc: <text>    - Hands-on experience in writing highly scalable distributed cloud software applications; ideally you have experienced hyper-growth in a multinational distributed setting

                <br/>- History of problem solving and taking ownership of features, with a team, on short and long-running projects

                <br/>- A continuous learning attitude and an eagerness to dive in to solve exciting problems

                <br/>- Node.js, JavaScript, unit testing, engineering practices

                <br/>- Git/Github version control, and CI/CD for automated testing and deployment.

                <br/>- Data modeling, designing REST API’s, and micro services development

                <br/>- Experience or interest in Kubernetes, Terraform, GCP, CI/CD pipelines

                <br/>- Golang, Ruby, SQL - nice to have

                <br/>- Excellent written and oral communication skills

                <br/>- Excels in an Agile environment using Scrum methodologies

                <br/>- You are passionate about working alongside customers to determine solutions that best fits their needs<br/></text>,
            benefitsTitle: <text> <h4>Perks & Benefits</h4>
                <br/></text>,
            benefits: <text>    - Stock Options (Every employee is an owner in the company)

                <br/>- Health Benefits (100% Paid Employee Medical, Dental, and Vision, dependent premium covered at 50%)

                <br/>- 100% Company paid Life & Risk insurance

                <br/>- Retirement / Employee Pension Plan PPE (with 5% employer contribution)

                <br/>- 1000 PLN for glasses reimbursement

                <br/>- 100% paid sick leave for first 33 days of absence

                <br/>- 26 days of paid time off per year for everyone

                <br/>- Quarterly Company wellness days

                <br/>- Access to on-demand fitness and wellness through Wellable platform

                <br/>- Free and confidential access to Employee Assistance Program through LifeWorks

                <br/>- One-time payment of 2050 PLN for home office stipend

                <br/>- 400 PLN/month wellness allowance to spend on whatever you want!

                <br/>- Flexibility (working from home or from office)<br/></text>,
            link: "https://wpengine.wd1.myworkdayjobs.com/WP_Engine/job/Krakow/Software-Engineer_JR101574"
        },
        {
            job: "Engineering Intern",
            company: "WP Engine",
            companyDescription: <text>Interested in an internship with a premier Engineering team? Then keep reading!

                <br/><br/>Founded in Austin, Texas by well-known serial entrepreneur Jason Cohen (@asmartbear), WP Engine has maintained its scrappy startup roots while experiencing explosive growth. This growth provides many opportunities for engineers at WP Engine to solve hard problems at scale, yet we are still small enough for your contributions to have a noticeable impact on the company’s future.</text>,
            jobDescription: <text>We are searching for software engineering interns to join our rapidly expanding Product & Engineering team and help us enhance the managed cloud platform that enable our customers to build amazing digital experiences.

                <br/>Our internship offers an opportunity to collaborate in an Agile team environment to make significant engineering contributions to meaningful projects. You will further develop your technical skills while collaborating with talented engineers. We hire for talent and potential, we want smart people to help invent the future of web hosting.

                <br/>We see our culture as a competitive advantage and believe that it is important to hire the best and ensure that we provide an environment where the best get better. If you are smart, great at solving problems, a hard worker, and an outstanding teammate, you may be the engineer that we are looking for.<br/></text>,
            responsibility: <text>- Write, test, integrate, debug, and troubleshoot software applications that are resilient, robust, and perform at scale

                <br/>- Deliver business value incrementally and iteratively as part of an Agile team

                <br/>- Improve automated test coverage and build deployment pipelines to safely and rapidly push new code to production

                <br/>- Be a great teammate to the other members of your Agile Scrum team

                <br/>- Our tech stack will allow you to test yourself in Go, Javascript, Python, NodeJS, GCP, AWS, and more<br/></text>,
            skills: [
                "Interested in Go",
                "Interested in JavaScript",
                "Interested in Python",
                "Interested in NodeJS",
                "Interested in GCP",
                "Interested in AWS"
            ],
            skillDesc: <text>- Currently pursuing a Computer Science or related degree

                <br/>- Experience writing web applications (in any language)

                <br/>- Natural problem solving abilities, an inquisitive personality, and an eagerness to tackle new challenges

                <br/>- Excellent written and oral communication skills

                <br/>- Passionate about working alongside a team to determine what solution best fits the customer’s needs

                <br/>- Excited by the flexibility and dynamic nature of a fast paced environment<br/>
            </text>,
            benefits: "",
            benefitsTitle: "",
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
            Tutaj znajdziesz oferty pracy przygotowane przez naszych sponsorów.
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
                Tutaj znajdziesz oferty pracy przygotowane przez naszych sponsorów.
                </p>
            </Col>
        </Row>


        <Col xs={12} lg={{span: 6, offset: 6}}>
            <Row style={{ height: '100vh', paddingTop: '20vh', paddingBottom: '40vh'}}>
                {
                    offers.map((offer) => (
                        <Card bg="dark" className="my-3" style={{ display: 'inline-block', float: 'none'}} >
                            <Card.Body>
                                <h4>{offer.job}</h4>
                                <p class="lead">{offer.company}</p>
                                <p>{offer.jobDescription}</p>
                                <h5 className="fw-bold">Wymagania</h5>
                                {
                                    offer.skills.map((skill) => (
                                        <Badge bg="dark" className="m-1 p-2 border border-primary" style={{ borderWidth: 1, borderColor: "#FF0066" }}>{skill}</Badge>
                                    ))
                                }
                                    <Button className="px-5 mt-3 text-white fw-bold btn-primary btn-block" style={{ width: '100%' }} onClick={() => handleJobModal(offer)}>Więcej</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </Row>
        </Col>
        <JobModal
            show={modalJobShow}
            onHide={() => setModalJobShow(false)}
            info={modalJobInfo}
        />
    </Container>
  )
}
