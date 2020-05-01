import React, { useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';



function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default connect(null)(Example);


// export default Example






// const PeopleDashboard = () => {
//   return (
//     <div>
//       <h1> People Dashboard</h1>
//     </div>
//   );
// };

// export default PeopleDashboard;
