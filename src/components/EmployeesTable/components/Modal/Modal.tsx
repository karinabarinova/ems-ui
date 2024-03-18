import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PopupProps } from "./Modal.types";

const Popup: React.FC<PopupProps> = ({ onHide, onProceed, show }) => {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Confirm Deletion</h4>
                <p>
                    Are you sure you want to delete this employee? This action
                    cannot be undone. Please confirm if you wish to proceed with
                    the deletion.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Back</Button>
                <Button variant="danger" onClick={onProceed}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Popup;
