import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Button, Card} from 'react-bootstrap';
import {createEvent, updateEvent} from '../eventActions';
import cuid from 'cuid';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: '',
  };
  if (eventId && state.events.length > 0) {
    event = state.events.filter (event => event.id === eventId)[0];
  }

  return {
    event,
  };
};

const mapDispathToProps = {
  createEvent,
  updateEvent,
};

class EventForm extends Component {
  state = {...this.props.event};

  handleFormSubmit = e => {
    e.preventDefault ();
    if (this.state.id) {
      this.props.updateEvent (this.state);
      this.props.history.push (`/events/${this.state.id}`);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid (),
        hostPhotoURL: 'assets/user.png',
      };
      this.props.createEvent (newEvent);
      this.props.history.push (`/events/${newEvent.id}`);
    }
  };

  handleInputChange = e => {
    this.setState ({
      [e.target.name]: e.target.value,
    });
  };

  render () {
    const {title, date, city, venue, hostedBy} = this.state;
    return (
      <Card className="card-form">
        <Form onSubmit={this.handleFormSubmit} autoComplete="off">
          <Form.Group controlId="formEventTitle">
            <Form.Label>Event Title</Form.Label>
            <Form.Control
              name="title"
              value={title}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Event Title"
            />
          </Form.Group>

          <Form.Group controlId="formEventDate">
            <Form.Label>Event Date</Form.Label>
            <Form.Control
              name="date"
              value={date}
              onChange={this.handleInputChange}
              type="date"
              placeholder="Event Date"
            />
          </Form.Group>

          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              value={city}
              onChange={this.handleInputChange}
              type="text"
              placeholder="City event is taking place"
            />
          </Form.Group>

          <Form.Group controlId="formVenue">
            <Form.Label>Venue</Form.Label>
            <Form.Control
              name="venue"
              value={venue}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Enter the Venue of the event"
            />
          </Form.Group>
          <Form.Group controlId="formHostedBy">
            <Form.Label>Hosted By</Form.Label>
            <Form.Control
              name="hostedBy"
              value={hostedBy}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Enter the name of person hosting"
            />
          </Form.Group>

          <Button variant="success" className="btn-submit" type="submit">
            Submit
          </Button>
          <Button
            onClick={this.props.history.goBack}
            className="btn-cancel"
            type="submit"
          >
            Cancel
          </Button>
        </Form>
      </Card>
    );
  }
}

export default connect (mapStateToProps, mapDispathToProps) (EventForm);
