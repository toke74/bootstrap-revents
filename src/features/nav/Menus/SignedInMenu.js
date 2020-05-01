import React from 'react';
import {Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const SignedInMenu = ({signOut, currentUser}) => {
  return (
    <Nav className="avater-img">
      <img className="avatar" src="assets/user.png" alt="logo" />
      <NavDropdown
        className="username-nav"
        title={currentUser}
        id="collasible-nav-dropdown"
      >
        <NavDropdown.Item>
          <i className="fas fa-plus" />Create Event
        </NavDropdown.Item>
        <NavDropdown.Item>
          <i className="fas fa-calendar" />My Events
        </NavDropdown.Item>
        <NavDropdown.Item>
          <i className="fas fa-users" />My Network
        </NavDropdown.Item>
        <NavDropdown.Item>
          <i className="fas fa-user" />My Profile
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="settings">
          <i className="fas fa-cogs" />Settings
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={signOut}>
          <i className="fas fa-power-off" />Sign Out
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default SignedInMenu;
