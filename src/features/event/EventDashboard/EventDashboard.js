import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventList from '../EventList/EventList';
import {deleteEvent} from '../eventActions';

class EventDashboard extends Component {
  handleDeleteEvent = id => {
    this.props.deleteEvent (id);
  };

  render () {
    const {events} = this.props;
    return (
      <div className="row">
        <div className="event-form col-lg-4 order-lg-12">
          <h1>Activity Feed</h1>
        </div>
        <div className="event-list col-lg-8 order-lg-1">
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

const mapDispatchToPorops = {
  deleteEvent,
};

export default connect (mapStateToProps, mapDispatchToPorops) (EventDashboard);
