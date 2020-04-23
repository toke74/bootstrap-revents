import React, { Fragment } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const SettingsNav = () => {
  return (
    <Fragment>
      <Card className="settings-card-nav">
        <Card.Header>
          <i className="fas fa-user" />Profile
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item as={NavLink} to="/settings/basic">
            Basic
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="/settings/about">
            About Me
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="/settings/photo">
            My Photo
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card className="settings-card-nav" style={{ width: '13rem' }}>
        <Card.Header>
          <i class="fas fa-cogs" />Account
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item as={NavLink} to="/settings/account">
            My Account
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Fragment>
  );
};

export default SettingsNav;
