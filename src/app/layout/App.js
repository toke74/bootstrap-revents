import React, { Component, Fragment } from 'react';
import NavigationBar from '../../features/nav/NavBar/NavigationBar';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <Container className="app-container">
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
