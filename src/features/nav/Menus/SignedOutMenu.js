import React from 'react';
import {Nav, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const SignedOutMenu = ({signIn, register}) => {
  return (
    <Nav>
      <Nav.Link as={NavLink} to="/login">
        <Button size="sm" variant="outline-info">
          Login
        </Button>
      </Nav.Link>
      <Nav.Link as={NavLink} to="/register">

        <Button size="sm" variant="outline-info">
          Register
        </Button>
      </Nav.Link>

    </Nav>
  );
};

export default SignedOutMenu;
