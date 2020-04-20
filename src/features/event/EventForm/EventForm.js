import React, {Component} from 'react';
import {Form, Button, Card} from 'react-bootstrap';

class EventForm extends Component {
  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: '',
  };

  handleFormSubmit = e => {
    e.preventDefault ();
    this.props.createEvent (this.state);
  };

  handleInputChange = e => {
    this.setState ({
      [e.target.name]: e.target.value,
    });
  };

  //we can destracture handleInputChange
  /*handleInputChange = ({target:{name, value}}) => {
     this.setState({
      [name]:value,
     });
   };*/

  render () {
    const {cancleFormOpen} = this.props;
    const {title, date, city, venue, hostedBy} = this.state;
    return (
      <Card className="card-form">
        <Form onSubmit={this.handleFormSubmit} autocomplete="off">
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
          <Button onClick={cancleFormOpen} className="btn-cancel" type="submit">
            Cancel
          </Button>
        </Form>
      </Card>
    );
  }
}

export default EventForm;
