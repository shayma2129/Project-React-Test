import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import img1 from "../Slide/slide1.jpg";
export default function Emprunt({
  id,
  libelle,
  auteur,
  edition,
  nbExemplaire,
  condition,
  EmpruntCondition,
  dateEmprunt,
  dateRetourLivre,
  deleteBook,
  updateBook,
  updateConditionBook,
  updateEmpruntConditionBook,
}) {
  const image = {
    borderRadius: "10px 10px 0 0",
    marginBottom: "20px",
    width: "100%",
    height: "auto",
  };
  const TitleStyle = {
    margin: "0px",
    fontSize: "1.4em",
    marginBottom: "20px",
    textAlign: "center",

    fontWeight: "900",
    color: "#d2e30d",
  };
  const TextCardAuteur = {
    fontWeight: "700",
  };
  const TextCard = {
    fontWeight: "500",
  };
  const spaceBetween = {
    marginRight: "20px",
  };
  const buttonStyle = {
    backgroundColor: "#d2e30d",
    borderColor: "#d2e30d",
  };
  const mystyle = {
    fontFamily: "Arial",
    width: "300px",
    height: "600px",
    marginBottom: "20px",
  };

  const [libelleToUpdate] = useState(libelle);
  const [auteurToUpdate] = useState(auteur);
  const [editionToUpdate] = useState(edition);
  const [dateEmpruntToUpdate, setdateEmpruntToUpdate] = useState(dateEmprunt);
  const [dateRetourLivreToUpdate, setdateRetourLivreToUpdate] = useState(
    dateRetourLivre
  );
  const [conditionToUpdate] = useState(condition);
  const [nbExemplaireToUpdate] = useState(nbExemplaire);
  const [EmpruntConditionToUpdate, setEmpruntConditionToUpdate] = useState(
    EmpruntCondition
  );
  let dateExpired = new Date();
  const handleEmpruntCondition = () => {
    if (
      EmpruntConditionToUpdate === "Noemprun" ||
      EmpruntConditionToUpdate === ""
    ) {
      updateEmpruntConditionBook(
        id,
        libelleToUpdate,
        auteurToUpdate,
        editionToUpdate,
        nbExemplaireToUpdate,
        conditionToUpdate,
        EmpruntConditionToUpdate,
        dateEmpruntToUpdate,
        dateRetourLivreToUpdate
      );
      setEmpruntConditionToUpdate(EmpruntConditionToUpdate);
      setdateEmpruntToUpdate(dateEmpruntToUpdate);
      setdateRetourLivreToUpdate(dateRetourLivreToUpdate);

      alert("Now Book no emprunt ");
    }

    if (EmpruntConditionToUpdate === "emprun") {
      let dateod = new Date(dateRetourLivreToUpdate);
      if (dateExpired > dateod) {
        let EmpruntConditionToUpdate = "emprun";
        updateEmpruntConditionBook(
          id,
          libelleToUpdate,
          auteurToUpdate,
          editionToUpdate,
          nbExemplaireToUpdate,
          conditionToUpdate,
          EmpruntConditionToUpdate,
          dateEmpruntToUpdate,
          dateRetourLivreToUpdate
        );
        setEmpruntConditionToUpdate(EmpruntConditionToUpdate);
        alert("ce livre est en retard");
      } else {
        alert("ce livre est en enprunt");
      }
    }
  };

  return (
    <div className="Profile">
      <div className="col-2">
        <Card style={mystyle}>
          <Card.Img style={image} variant="top" src={img1} />
          <Card.Body>
            <Card.Title style={TitleStyle}>{libelle}</Card.Title>
            <Card.Text style={TextCardAuteur}>Auteur : {auteur}</Card.Text>
            <Card.Text style={TextCard}>
              <li>Nombre d'exemplaire : {nbExemplaire} </li>
              <li>Edition : {edition} </li>
            </Card.Text>
            <Card.Text style={TextCard}>
              <li>Date Emprunt : {dateEmpruntToUpdate} </li>
              <li>Date Retour : {dateRetourLivreToUpdate} </li>
            </Card.Text>
            <Card.Text style={TextCard}>
              <li>Etat Actuelle : {condition} </li>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted" style={spaceBetween}>
              {" "}
              voir Etat Actuel du livre
            </small>

            <Button style={buttonStyle} onClick={handleEmpruntCondition}>
              savoir plus
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
