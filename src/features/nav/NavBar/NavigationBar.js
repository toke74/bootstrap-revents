import React, {Component} from 'react';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';

class NavigationBar extends Component {
  render () {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo-img" src="assets/logo.png" alt="logo" />
            Re-vents
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#event">
                Event
              </Nav.Link>
              <Nav.Link href="#create-event">
                <Button size="sm" variant="outline-success">
                  Create Event
                </Button>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login">
                <Button size="sm" variant="outline-info">Login</Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#">
                <Button size="sm" variant="outline-info">Sign Out</Button>
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
