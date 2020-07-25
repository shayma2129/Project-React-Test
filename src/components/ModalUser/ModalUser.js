import React ,{useState}from "react";
import { Modal,Button } from "react-bootstrap";


export default function ModalUser({showh,firstname,lastname,email,permission}) {
    const [show, setShow] = useState(showh);
    const handleClose = () =>setShow(false);
  return (
    <>
      

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
                <ul>
                    <li>Firstname : {firstname} </li>
                    <li>lastname : {lastname} </li>
                    <li>email : {email} </li>
                    <li>Permission : {permission} </li>
                </ul>
            
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   
  );
}

