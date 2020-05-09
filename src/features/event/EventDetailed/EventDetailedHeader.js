import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

const eventImageStyle = {
  filter: 'brightness(30%)',
};

const eventImageTextStyle = {
  position: 'absolute',
  bottom: '15%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white',
};

const EventDetailedHeader = ({ event }) => {
  let dateTime = moment(event.date).format('dddd, Do  MMMM YYYY, h:mm a');
  return (
    <Card>
      <Card.Img
        style={eventImageStyle}
        variant="top"
        src={`/assets/categoryImages/${event.category.value}.jpg`}
      />
      <Card.Body style={eventImageTextStyle}>
        <Card.Title style={{ marginBottom: '3px' }}>{event.title}</Card.Title>
        <div className="card-text">
          <p style={{ marginBottom: '3px' }}>{dateTime}</p>
          
          <p>
            {' '}
            Hosted By <a href="#hostedby">{event.hostedBy}</a>
          </p>
        </div>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Button className="cancle-my-place-btn">Cancle My Place</Button>
          <Button style={{ marginLeft: '8px' }}>JOIN THIS EVENT</Button>
          <Button
            as={Link}
            to={`/manage/${event.id}`}
            className="float-right manage-event-btn"
          >
            Manage Event
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default EventDetailedHeader;
