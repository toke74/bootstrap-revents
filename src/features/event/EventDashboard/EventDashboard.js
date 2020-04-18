import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import EventList from '../EventList/EventList';

class EventDashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="event-list" md={7}>
            <EventList />
          </Col>
          <Col className="event-form" md={5}>
            <h2>Right Column</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            facilis quae eveniet atque, soluta veritatis deserunt maxime
            necessitatibus eaque nemo est id sed praesentium numquam temporibus
            ab voluptatibus illum! Debitis!
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventDashboard;
