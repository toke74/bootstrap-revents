import React from 'react';
import { Nav, Button } from 'react-bootstrap';

const SignedOutMenu = ({ signIn}) => {
  return (
    <Nav>
      <Button onClick={signIn} size="sm" variant="outline-info">
        Login
      </Button>
      <Button size="sm" variant="outline-info">
        Register
      </Button>
    </Nav>
  );
};

export default SignedOutMenu;
