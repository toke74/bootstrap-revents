import React, {Component} from 'react';
import {
  Card,
  Form,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import {login} from '../authActions';

const actions = {
  login,
};

class LoginForm extends Component {
  onFormSubmit = values => {
    console.log (values);
    this.props.login (values);
    this.props.history.push ('/events');
  };

  render () {
    const {handleSubmit} = this.props;
    return (
      <Row>
        <Col md={3} />
        <Col md={5}>
          <Card className="card-login-form">
            <Card.Header>Login to Re-vents</Card.Header>
            <ListGroup className="list-group-flush">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Form
                  autoComplete="off"
                  onSubmit={handleSubmit (this.onFormSubmit)}
                  style={{width: '93%'}}
                >
                  <Field
                    name="email"
                    component={TextInput}
                    type="text"
                    placeholder="Email Address"
                  />
                  <Field
                    name="password"
                    type="password"
                    component={TextInput}
                    placeholder="Password"
                  />
                  <Button className=" btn-block" type="submit">
                    Login
                  </Button>
                  <ListGroupItem className="login-border" />
                </Form>
              </Card.Body>
            </ListGroup>

          </Card>
        </Col>
      </Row>
    );
  }
}

export default connect (null, actions) (
  reduxForm ({form: 'loginForm'}) (LoginForm)
);
