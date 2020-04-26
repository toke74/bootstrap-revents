import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const EventDetailedSidebar = ({ attendees }) => {
  return (
    <Card>
      <Card.Header className="event-sidebar-header">
        {attendees && attendees.length}
        {attendees && attendees.length === 1 ? ' Person ' : ' People '}
        Going
      </Card.Header>
      <ListGroup variant="flush">
        {attendees &&
          attendees.map((attendee) => (
            <ListGroup.Item key={attendee.id}>
              <Card.Img src={attendee.photoURL} />{' '}
              <a href="#name" className="attendee-sidebar-name">
                {attendee.name}
              </a>
              {attendee.isHost && (
                <div className="ribbon ribbon-top-right">
                  <span>Host</span>
                </div>
              )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Card>
  );
};

export default EventDetailedSidebar;
