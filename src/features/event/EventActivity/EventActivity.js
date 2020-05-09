import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
const EventActivity = () => {
  return (
      <Card className='event-activity-card'>
          <Card.Header className='event-activity-header' >Recent Activity</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Recent Activity 1</ListGroup.Item>
        <ListGroup.Item>Recent Activity 2</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default EventActivity;
