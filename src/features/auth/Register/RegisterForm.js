import React from 'react';
import {Card, Form, Button, Row, Col, ListGroupItem} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';

const RegisterForm = () => {
  return (
    <Row>
      <Col md={3} />
      <Col md={5}>
        <Card className="card-register-form">
          <Card.Header>Register to Re-vents</Card.Header>
          <Card.Body className="d-flex justify-content-center align-items-center">
            <Form autoComplete="off" style={{width: '95%'}}>
              <Field
                name="displayName"
                type="text"
                component={TextInput}
                placeholder="Known As"
              />
              <Field
                name="email"
                type="text"
                component={TextInput}
                placeholder="Email"
              />
              <Field
                name="password"
                type="password"
                component={TextInput}
                placeholder="Password"
              />

              <Button className=" btn-block">
                Register
              </Button>
              <ListGroupItem className="login-border" />
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default reduxForm ({form: 'registerForm'}) (RegisterForm);
