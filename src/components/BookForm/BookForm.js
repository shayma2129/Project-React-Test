import React, { useState, memo } from "react";
import { Form,Col ,Button,Card} from "react-bootstrap";
import "./BookForm.css";

function BookForm({ addBook }) {

  const [libelle, setLibelle] = useState("");
  const [auteur, setAuteur] = useState("");
  const [edition, setEdition] = useState("");
  const [nbExemplaire, setNbExemplaire] = useState(0);
  const [condition, setcondition] = useState("Noarchived");
  const [EmpruntCondition, setEmpruntCondition] = useState("Noemprun");
  const [dateEmprunt, setdateEmprunt] = useState("");
  const [dateRetourLivre, setdateRetourLivre] = useState("");
  const HandleAddBook = () => {
    addBook(libelle, auteur, edition, nbExemplaire,condition,EmpruntCondition,dateEmprunt,dateRetourLivre);
    setLibelle("");
    setAuteur("");
    setEdition("");
    setNbExemplaire("");
    setcondition("Noarchived");
    setEmpruntCondition("Noemprun");
    setdateEmprunt("");
    setdateRetourLivre("");
    setIsVisible(!isVisible);
  };
  const [isVisible, setIsVisible] = useState(true);
  const bookFormVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      { !isVisible ? (
      <div className="Book-form" aria-label="Book-form">
      <Card border="primary" style={{ width: '50rem'}}>
        <Card.Header> Book Form</Card.Header>
        <Card.Body>
        <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="libelle">Libelle</Form.Label>
            <Form.Control
              aria-label="libelle"
              type="text"
              placeholder="libelle"
              value={libelle}
              onChange={(e) => setLibelle(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Auteur</Form.Label>
            <Form.Control
              aria-label="Auteur"
              type="text"
              placeholder="Auteur"
              value={auteur}
              onChange={(e) => setAuteur(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Nombre d'exemplaire</Form.Label>
            <Form.Control
              aria-label="Nombre exemplaire"
              type="number"
              placeholder="Nombre exemplaire"
              value={nbExemplaire}
              onChange={(e) => setNbExemplaire(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col}>
            <Form.Label>Edition</Form.Label>
            <Form.Control
              aria-label="Edition"
              type="text"
              placeholder="Edition"
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
            />
          </Form.Group>
          
        </Form.Row>

        <Button data-testid="submit" type="submit"  variant="primary" onClick={HandleAddBook}>
          Add a Book
        </Button>{' '}
      </Form>
        </Card.Body>
        
      </Card>
      </div>
    ):(
       <div className="Book-form">
          <Button data-testid="showtoggle"variant="info" type="submit" onClick={bookFormVisibility} > 
            Show Book Form</Button>{' '}
       </div>
     
        
      
   )}
   
    </>
   
  );
}

export default memo(BookForm);
