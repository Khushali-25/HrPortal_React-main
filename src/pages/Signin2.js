import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import bg1 from "../assets/img/bg1.jpg";

export default function Signin2() {
   // Create a state variable to store the input value
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   // Define a function to handle changes in the input field
   const handleEmailChange = (event) => {
     setEmail(event.target.value);
     
   };
   const handlePasswordChange = (event) => {
   
    setPassword(event.target.value);
  };

  return (
    <div className="page-sign d-block py-0">
      <Row className="g-0">
        <Col md="7" lg="5" xl="4" className="col-wrapper">
          <Card className="card-sign">
            <Card.Header>
              <Link to="/" className="header-logo mb-5"><img src="payroll.png" style={{ width: "200px" }} /></Link>
              <Card.Title>Sign In</Card.Title>
              <Card.Text>Welcome back! Please signin to continue.</Card.Text>
            </Card.Header>
            <Card.Body>
              <Form method="get" action="/dashboard/helpdesk">
                <div className="mb-4">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />
                </div>
                <div className="mb-4">
                  <Form.Label className="d-flex justify-content-between">
                    Password <Link to="">Forgot password?</Link>
                  </Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
                </div>
                <Button type="submit" className="btn-sign">Sign In</Button>

                <div className="divider"><span>or sign in with</span></div>

                <Row className="gx-2">
                  <Col><Button variant="" className="btn-facebook"><i className="ri-facebook-fill"></i> Facebook</Button></Col>
                  <Col><Button variant="" className="btn-google"><i className="ri-google-fill"></i> Google</Button></Col>
                </Row>
              </Form>
            </Card.Body>
            <Card.Footer>
              Don't have an account? <Link to="/pages/signup2">Create an Account</Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="d-none d-lg-block">
          <img src={bg1} className="auth-img" alt="" />
        </Col>
      </Row>
    </div>
  )
}