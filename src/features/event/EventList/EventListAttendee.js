import React, {Component} from 'react';

class EventListAttendee extends Component {
  render () {
    const {attendee} = this.props;
    return (
      <div>
        <img className="attendee-img" src={attendee.photoURL} alt="att" />
      </div>
    );
  }
}

export default EventListAttendee;
