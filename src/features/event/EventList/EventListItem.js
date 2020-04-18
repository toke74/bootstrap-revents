import React, { Component } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
  render() {
    return (
      <div>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex">
              <div>
                <img
                  className="card-img"
                  src="https://randomuser.me/api/portraits/women/42.jpg"
                  alt="img-header"
                />
              </div>
              <div className="card-title-host">
                <a className="title-card" href="#title">
                  Event Title{' '}
                </a>
                <p>
                  Hosted by{' '}
                  <a className="hosted-card" href="#hosted">
                    hosted by
                  </a>
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>
                <i className="fas fa-clock" />
                <span className="date">date</span>
              </span>
              |
              <span>
                <i className="fas fa-map-marker" /> time
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex event-list-attendee">
              <EventListAttendee />
              <EventListAttendee />
              <EventListAttendee />
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Description will go here </span>
              <span>
                <Button className="float-right ">View</Button>
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default EventListItem;
