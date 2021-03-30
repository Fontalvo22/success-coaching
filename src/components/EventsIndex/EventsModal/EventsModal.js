import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EventsModal = (props) => {
  const [show, setShow] = useState(props.show);

  return (

    <div className="EventsModal container">
      <Modal show={props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setShow(false);
          }}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { console.log(props.show); props.setter() }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

export default EventsModal;