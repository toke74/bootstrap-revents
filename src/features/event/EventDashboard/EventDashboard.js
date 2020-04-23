import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
    ],
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
    ],
  },
];

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false,
    selectedEvent: null,
  };

  handleCreateFormOpen = () => {
    this.setState ({
      selectedEvent: null,
      isOpen: true,
    });
  };

  handleFormCancel = () => {
    this.setState ({
      isOpen: false,
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid ();
    newEvent.hostPhotoURL = '/assets/user.png';

    /*this.setState((prevState)=>({
      events:[...prevState.events, newEvent]
    }))*/

    //OR destracture  prevState
    this.setState (({events}) => ({
      events: [...events, newEvent],
      isOpen: false,
    }));
  };

  handleselectEvent = event => {
    this.setState ({
      selectedEvent: event,
      isOpen: true,
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.setState (prevState => ({
      events: prevState.events.map (event => {
        if (event.id === updatedEvent.id) {
          return {...updatedEvent};
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null,
    }));
  };

  handleDeleteEvent = id => {
    this.setState (prevState => ({
      events: prevState.events.filter (event => event.id !== id),
    }));
  };

  render () {
    const {events, isOpen, selectedEvent} = this.state;
    return (
      <div className="row">
        <div className="event-form col-lg-4 order-lg-12">
          <Button onClick={this.handleCreateFormOpen} variant="success">
            Create Event
          </Button>
          {isOpen &&
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancleFormOpen={this.handleFormCancel}
            />}
        </div>
        <div className="event-list col-lg-8 order-lg-1">
          <EventList
            events={events}
            selectEvent={this.handleselectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </div>
      </div>
    );
  }
}

export default EventDashboard;
