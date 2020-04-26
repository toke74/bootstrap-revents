import React from 'react';
import {Card, Button, ListGroup, Form, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const EventDetailedChat = () => {
  return (
    <Card className="event-chat-card">
      <Card.Header className="event-chat-header">
        Chat about this event
      </Card.Header>

      <ListGroup className="event-chat-list-group" variant="flush">
        <ListGroup.Item className="event-chat-group-item">
          <Row>
            <Col sm={1}>
              <Card.Img
                className="event-chat-img"
                variant="top"
                src="/assets/user.png"
              />
            </Col>
            <Col sm={11}>
              <Card.Body className="event-chat-body">
                <Card.Title as={Link} to="/events">Matt</Card.Title>
                <span className="event-chat-date">Today at 5:42PM</span>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Reply</Card.Link>
              </Card.Body>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="event-chat-group-item">
          <Row>
            <Col sm={1}>
              <Card.Img
                className="event-chat-img"
                variant="top"
                src="/assets/user.png"
              />
            </Col>
            <Col sm={11}>
              <Card.Body className="event-chat-body">
                <Card.Title as={Link} to="/events">Elliot Fu</Card.Title>
                <span className="event-chat-date">Yesterday at 12:30AM</span>
                <Card.Text>
                  This has been very useful for my research. Thanks as well!
                </Card.Text>
                <Card.Link href="#">Reply</Card.Link>
              </Card.Body>
            </Col>
          </Row>
          <ListGroup.Item className="event-chat-group-item">
            <Row>
              <Col sm={1}>
                <Card.Img
                  className="event-chat-img"
                  variant="top"
                  src="/assets/user.png"
                />
              </Col>
              <Col sm={11}>
                <Card.Body className="event-chat-body">
                  <Card.Title as={Link} to="/events">Jenny Hess</Card.Title>
                  <span className="event-chat-date">Just now</span>
                  <Card.Text>
                    Elliot you are always so right :)
                  </Card.Text>
                  <Card.Link href="#">Reply</Card.Link>
                </Card.Body>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup.Item>

        <ListGroup.Item className="event-chat-group-item">
          <Row>
            <Col sm={1}>
              <Card.Img
                className="event-chat-img"
                variant="top"
                src="/assets/user.png"
              />
            </Col>
            <Col sm={11}>
              <Card.Body className="event-chat-body">
                <Card.Title as={Link} to="/#">Joe Henderson</Card.Title>
                <span className="event-chat-date">5 days ago</span>
                <Card.Text>
                  Dude, this is awesome. Thanks so much
                </Card.Text>
                <Card.Link href="#">Reply</Card.Link>
              </Card.Body>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="event-chat-list-textarea">
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="7" />
            </Form.Group>
          </Form>
        </ListGroup.Item>
        <ListGroup.Item className="btn-reply">
          <Button variant="primary"> <i className="fas fa-edit" />Add Reply</Button>
        </ListGroup.Item>
      </ListGroup>

    </Card>
  );
};

export default EventDetailedChat;
