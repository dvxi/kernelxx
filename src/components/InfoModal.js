import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const InfoModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="text-white text-center"
            >
            <Modal.Body className="p-4 rounded" style={{ backgroundColor: '#313131' }}>
                <h4>Dowiedz się więcej</h4>
                <p className="mb-4">
                    {props.info.description}
                </p>
                <div className="d-grip gap-2">
                    <Button variant="outline-primary" size="lg" href="https://www.facebook.com/KNIKernel">
                        Kliknij aby przejść na naszego Facebooka
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default InfoModal;