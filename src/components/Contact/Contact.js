import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <Container fluid className="project-section" id='contact'>
            <Container>
                <h1 className="project-heading">
                    Let's <strong className="purple">Connect ! </strong>
                </h1>
                <Row>
                    <Col><Button>Email</Button></Col>
                    <Col><Button>Phone</Button></Col>
                </Row>
                <h5 className="project-heading">
                    <strong className="purple">Get In Touch </strong> using this form
                </h5>
                <input placeholder='Email' />
                <input placeholder='message' />
                <p>Captcha</p>
                <Button>Submit</Button>
            </Container>
        </Container>
    )
}

export default Contact