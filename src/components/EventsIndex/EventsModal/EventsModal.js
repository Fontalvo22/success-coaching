import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EventsModal = (props) => {
  const [show, setShow] = useState(props.show);

  return (

    <div className="EventsModal container">
      <Modal show={props.show} onHide={() => { props.setter() }}>
        <Modal.Header closeButton>
          <Modal.Title>Título</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src="https://picsum.photos/500/300" className="img-fluid" alt="" />

          <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            props.setter();
          }}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { props.setter() }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

export default EventsModal;