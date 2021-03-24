import React from "react";
import { Container, Form } from "react-bootstrap";

const Login = () => {
    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Enter your username</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Login;
