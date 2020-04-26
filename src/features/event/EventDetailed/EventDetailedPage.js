import React from 'react';
import {connect} from 'react-redux';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter (event => event.id === eventId)[0];
  }

  return {
    event,
  };
};

const EventDetailedPage = ({event}) => {
  return (
    <div className="row">
      <div className="col-md-4  order-md-12">
        <EventDetailedSidebar attendees={event.attendees} />
      </div>
      <div className="col-md-8  order-md-1">
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </div>
    </div>
  );
};

export default connect (mapStateToProps) (EventDetailedPage);
