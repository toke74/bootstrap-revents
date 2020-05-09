import React from 'react';
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap';
import moment from 'moment';

const EventDetailedInfo = ({ event }) => {
  let dateTime = moment(event.date).format('dddd, Do  MMMM YYYY, h:mm a');
  return (
    <Card className="event-detailed-info-card">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col sm={1}>
              <i className="fas fa-info" />
            </Col>
            <Col sm={11}>
              <p>{event.description}</p>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col sm={1}>
              <i className="fas fa-calendar" />
            </Col>
            <Col sm={11}>{dateTime}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col sm={1}>
              <i className="fas fa-map-marker" />
            </Col>
            <Col sm={8}>
              <p>{event.venue}</p>
            </Col>
            <Col sm={3}>
              <Button>Show Map</Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default EventDetailedInfo;
