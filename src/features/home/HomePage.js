import React from 'react';
import { Button } from 'react-bootstrap';

const HomePage = ({ history }) => {
  return (
    <div className="home-page">
      <div className="home2">
        <h1 className="h1-home-page">
          <img className="home-page-img" src="assets/logo.png" alt="logo" />
          Re-vents
        </h1>

        <Button onClick={() => history.push('/events')} variant="outline-light">
          <span style={{ marginRight: '12px' }}>Get started</span>
          <i className="fas fa-arrow-right" />
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
