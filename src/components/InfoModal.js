import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const InfoModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="text-black"
            >
            <Modal.Body>
                <h4>{props.info.name}</h4>
                <p>
                {props.info.text}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InfoModal;