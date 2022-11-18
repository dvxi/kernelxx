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
                    <br/>
                    {props.info.description}
                    <br/>
                </p>
                <div className="d-grip gap-2">
                    <Button href="https://www.facebook.com/KNIKernel" variant="outline-primary" size="lg">
                        Kliknij aby przejść do Facebooka
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default InfoModal;