import React from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';



function FooterSection() {
    return (
        <div>
        <Container className="py-5" id="info">
            <Row className="text-center my-5">
                <Col xs={9} lg={6} className="mx-auto">
                    <h2>Save the date!</h2>
                </Col>
            </Row>
            <Row className="text-center my-5 justify-content-center">
                <Col xs={12} lg={6}>
                    <p className="m-0 lead" style={{ fontWeight: 600}}>
                        3 grudnia 2022r <br />
                        Budynek D-10 AGH <br /><br />
                        Wstęp wolny <br /><br/>
                        Zapraszamy wszystkich, nie tylko studentów!
                    </p>
                </Col>
            </Row>
        </Container>
        </div>

    )
}

export default FooterSection;


