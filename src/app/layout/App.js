import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, withRouter } from 'react-router-dom';

import HomePage from '../../features/home/HomePage';
import NavigationBar from '../../features/nav/NavBar/NavigationBar';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import TestComponent from '../../features/test/TestComponent';
import LoginForm from '../../features/auth/Login/LoginForm';
import RegisterForm from '../../features/auth/Register/RegisterForm';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavigationBar />
              <Container className="app-container">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingDashboard} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/register" component={RegisterForm} />
                  <Route
                    path={['/createEvent', '/manage/:id']}
                    component={EventForm}
                  />
                  <Route path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
