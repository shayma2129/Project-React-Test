import React ,{useState}from "react";
import { Modal,Button } from "react-bootstrap";


export default function ModalBook({showh,libelle,auteur,edition,nbExemplaire,condition,dateEmprunt,dateRetourLivreToUpdate}) {
    const [show, setShow] = useState(showh);
    const handleClose = () => setShow(false);
  
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <ul>
                    <li aria-label="libelle">Libelle : {libelle} </li>
                    <li aria-label="autuer">Auteur : {auteur} </li>
                    <li aria-label="edition">Edition : {edition} </li>
                    <li aria-label="NbExempl">Nombre : {nbExemplaire} </li>
                    <li aria-label="condition">Etat : {condition} </li>
                    <li aria-label="DateEmprunt">Date of Emprunt : {dateEmprunt} </li>
                    <li aria-label="DateRetour">Date de retour : {dateRetourLivreToUpdate} </li>
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

