import React, {Component} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import EventListAttendee from './EventListAttendee';
import {Link} from 'react-router-dom';
import moment from 'moment';

class EventListItem extends Component {

  render () {
    
    const {event, deleteEvent} = this.props;
    let dateTime = moment(event.date).format('MMMM, Do YYYY, h:mm a');

    return (
      <div>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex">
              <div>
                <img
                  className="card-img"
                  src={event.hostPhotoURL}
                  alt="img-header"
                />
              </div>
              <div className="card-title-host">
                <a className="title-card" href="#title">
                  {event.title}
                </a>
                <p>
                  Hosted by{' '}
                  <a className="hosted-card" href="#hosted">
                    {event.hostedBy}
                  </a>
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>
                <i className="fas fa-clock" />
                <span className="date">{dateTime}</span>
              </span>
              |
              <span>
                <i className="fas event-venue-icon  fa-map-marker" />
                {' '}
                {event.venue}
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex event-list-attendee">
              {event.attendees &&
                event.attendees.map (attendee => (
                  <EventListAttendee key={attendee.id} attendee={attendee} />
                ))}
            </ListGroup.Item>
            <ListGroup.Item>
              <span>{event.description} </span>
              <span>
                <Button
                  onClick={() => deleteEvent (event.id)}
                  className="float-right btn-event-delete "
                  variant="danger"
                >
                  Delete
                </Button>
                <Button
                  as={Link}
                  to={`/events/${event.id}`}
                  className="float-right btn-event-view "
                >
                  View
                </Button>
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default EventListItem;
