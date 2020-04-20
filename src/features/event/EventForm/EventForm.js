import React, {Component} from 'react';
import {Form, Button, Card} from 'react-bootstrap';

class EventForm extends Component {
  render () {
    const {cancleFormOpen} = this.props;
    return (
      <Card className="card-form">
        <Form>
          <Form.Group controlId="formEventTitle">
            <Form.Label>Event Title</Form.Label>
            <Form.Control type="text" placeholder="Event Title" />
          </Form.Group>

          <Form.Group controlId="formEventDate">
            <Form.Label>Event Date</Form.Label>
            <Form.Control type="date" placeholder="Event Date" />
          </Form.Group>

          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City event is taking place"
            />
          </Form.Group>

          <Form.Group controlId="formVenue">
            <Form.Label>Venue</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Venue of the event"
            />
          </Form.Group>
          <Form.Group controlId="formHostedBy">
            <Form.Label>Hosted By</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the name of person hosting"
            />
          </Form.Group>

          <Button variant="success" className="btn-submit" type="submit">
            Submit
          </Button>
          <Button onClick={cancleFormOpen} className="btn-cancel" type="submit">
            Cancel
          </Button>
        </Form>
      </Card>
    );
  }
}

export default EventForm;
