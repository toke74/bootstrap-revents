import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Form, Button, Card, Row, Col} from 'react-bootstrap';
import {createEvent, updateEvent} from '../eventActions';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan,
} from 'revalidate';
import cuid from 'cuid';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectIput from '../../../app/common/form/SelectIput';
import DateIput from '../../../app/common/form/DateIput';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter (event => event.id === eventId)[0];
  }

  return {
    initialValues: event,
  };
};

const mapDispathToProps = {
  createEvent,
  updateEvent,
};

// const category = [
//   {key: 'drinks', text: 'Drinks', value: 'drinks'},
//   {key: 'culture', text: 'Culture', value: 'culture'},
//   {key: 'film', text: 'Film', value: 'film'},
//   {key: 'food', text: 'Food', value: 'food'},
//   {key: 'music', text: 'Music', value: 'music'},
//   {key: 'travel', text: 'Travel', value: 'travel'},
// ];

const category = [
  {key: 'drinks', value: 'drinks', label: 'Drinks'},
  {key: 'culture', value: 'culture', label: 'Culture'},
  {key: 'film', value: 'film', label: 'Film'},
  {key: 'food', value: 'food', label: 'Food'},
  {key: 'music', value: 'music', label: 'Music'},
  {key: 'travel', value: 'travel', label: 'Travel'},
];

const validate = combineValidators ({
  title: isRequired ({message: 'The event title is required'}),
  category: isRequired ({message: 'The category  is required'}),
  description: composeValidators (
    isRequired ({message: 'Please enter a description'}),
    hasLengthGreaterThan (4) ({
      message: 'Description needs to be at least 5 characters',
    })
  ) (),
  city: isRequired ('City'),
  venue: isRequired ('Venue'),
  date: isRequired ('Date'),
});

class EventForm extends Component {
  onFormSubmit = values => {
    console.log (values);
    if (values.id) {
      this.props.updateEvent (values);
      this.props.history.push (`/events/${values.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid (),
        hostPhotoURL: 'assets/user.png',
        hostedBy: 'Bob',
      };
      this.props.createEvent (newEvent);
      this.props.history.push (`/events/${newEvent.id}`);
    }
  };

  render () {
    const {pristine, submitting, invalid, initialValues, history} = this.props;
    return (
      <Row>
        <Col md={2} />
        <Col md={7}>
          <Card className="card-form card-event-form">
            <Form
              onSubmit={this.props.handleSubmit (this.onFormSubmit)}
              autoComplete="off"
            >
              <Card.Header>EVENT DETAILS</Card.Header>
              <Field
                name="title"
                component={TextInput}
                type="text"
                placeholder="Give your event a name"
              />
              <Field
                name="category"
                component={SelectIput}
                options={category}
                placeholder="What is your event about?"
              />

              <Field
                name="description"
                component={TextArea}
                type="text"
                rows={3}
                placeholder="Tell us about your event"
              />
              <Card.Header>EVENT LOCATION DETAILS</Card.Header>
              <Field
                name="city"
                component={TextInput}
                type="text"
                placeholder="Event city"
              />
              <Field
                name="venue"
                component={TextInput}
                type="text"
                placeholder="Event venue"
              />
              <Field
                name="date"
                component={DateIput}
                dateFormat="dd LLL yyyy h:mm a"
                showTimeSelect
                timeFormat="HH:mm"
                type="text"
                placeholder="Event date"
              />

              <Button
                disabled={invalid || submitting || pristine}
                variant="success"
                className="btn-submit"
                type="submit"
              >
                Submit
              </Button>
              <Button
                onClick={
                  initialValues.id
                    ? () => history.push (`/events/${initialValues.id}`)
                    : () => history.push ('/events')
                }
                className="btn-cancel"
                type="submit"
              >
                Cancel
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default connect (mapStateToProps, mapDispathToProps) (
  reduxForm ({
    form: 'formEvent',
    validate,
  }) (EventForm)
);
