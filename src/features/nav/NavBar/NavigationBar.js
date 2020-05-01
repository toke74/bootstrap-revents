import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import {NavLink, withRouter} from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import {logout} from '../../auth/authActions';

const actions = {
  logout,
};

const mapState = state => ({
  auth: state.auth,
});

class NavigationBar extends Component {
  handleSignedOut = () => {
    this.props.logout ();
    this.props.history.push ('/');
  };

  render () {
    const {auth} = this.props;
    const authenticated = auth.authenticated;
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
              <Nav.Link as={NavLink} exact to="/events">
                Event
              </Nav.Link>
              <Nav.Link as={NavLink} to="/people">
                People
              </Nav.Link>
              <Nav.Link as={NavLink} to="/test">
                Test
              </Nav.Link>
              <Nav.Link as={NavLink} to="/createEvent">
                <Button size="sm" variant="outline-info">
                  Create Event
                </Button>
              </Nav.Link>
            </Nav>
            {authenticated
              ? <SignedInMenu
                  signOut={this.handleSignedOut}
                  currentUser={auth.currentUser}
                />
              : <SignedOutMenu
                  signIn={this.handleSignIn}
                  register={this.handleRegister}
                />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter (connect (mapState, actions) (NavigationBar));
