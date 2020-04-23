import React, {Component} from 'react';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import {NavLink, withRouter} from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavigationBar extends Component {
  state = {
    autheticated: false,
  };

  handleSignedIn = () => {
    this.setState ({
      autheticated: true,
    });
  };
  handleSignedOut = () => {
    this.setState ({
      autheticated: false,
    });
    this.props.history.push ('/');
  };

  render () {
    const {autheticated} = this.state;
    return (
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand exact as={NavLink} to="/">
            <img className="logo-img" src="assets/logo.png" alt="logo" />
            Re-vents
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/events">
                Event
              </Nav.Link>
              <Nav.Link as={NavLink} to="/people">
                People
              </Nav.Link>
              <Nav.Link as={NavLink} to="/test">
                Test
              </Nav.Link>
              <Nav.Link as={NavLink} to="createEvent">
                <Button size="sm" variant="outline-info">
                  Create Event
                </Button>
              </Nav.Link>
            </Nav>
            {autheticated
              ? <SignedInMenu signOut={this.handleSignedOut} />
              : <SignedOutMenu signIn={this.handleSignedIn} />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter (NavigationBar);
