import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import "./Book.css";
import ModalBook from "../ModalBook/ModalBook.js";
import ButtonGroup from "react-bootstrap/ButtonGroup";
export default function Book({
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
  const [show, setShow] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [deatilsMode, setDetailsMode] = useState(false);
  const handleShow = () => {
    setShow(true);
    setDetailsMode(true);
  };
  const [libelleToUpdate, setLibelleToUpdate] = useState(libelle);
  const [auteurToUpdate, setAuteurToUpdate] = useState(auteur);
  const [editionToUpdate, setEditionToUpdate] = useState(edition);
  const [dateEmpruntToUpdate, setdateEmpruntToUpdate] = useState(dateEmprunt);
  const [dateRetourLivreToUpdate, setdateRetourLivreToUpdate] = useState(
    dateRetourLivre
  );

  const [nbExemplaireToUpdate, setNbExemplaireToUpdate] = useState(
    nbExemplaire
  );
  const [conditionToUpdate, setConditionToUpdate] = useState(condition);
  const [EmpruntConditionToUpdate, setEmpruntConditionToUpdate] = useState(
    EmpruntCondition
  );

  const handleUpdateBook = () => {
    updateBook(
      id,
      libelleToUpdate,
      auteurToUpdate,
      editionToUpdate,
      nbExemplaireToUpdate,
      conditionToUpdate,
      dateEmpruntToUpdate,
      dateRetourLivre,
      setEmpruntConditionToUpdate
    );
    setUpdateMode(false);
  };
  const handleArchive = () => {
    if (conditionToUpdate === "Noarchived" || conditionToUpdate === "") {
      let conditionToUpdate = "archived";
      updateConditionBook(
        id,
        libelleToUpdate,
        auteurToUpdate,
        editionToUpdate,
        nbExemplaireToUpdate,
        conditionToUpdate,
        EmpruntConditionToUpdate,
        dateRetourLivre,
        dateEmpruntToUpdate
      );
      setConditionToUpdate(conditionToUpdate);
      alert("Now Book becam,e archived ");
    }
    if (conditionToUpdate === "archived") {
      let conditionToUpdate = "Noarchived";
      updateConditionBook(
        id,
        libelleToUpdate,
        auteurToUpdate,
        editionToUpdate,
        nbExemplaireToUpdate,
        conditionToUpdate,
        dateRetourLivre,
        EmpruntConditionToUpdate,
        dateEmpruntToUpdate
      );
      setConditionToUpdate(conditionToUpdate);
      alert("Book became archived");
    }
  };

  function addDays(date, days) {
    const copy = new Date(Number(date));
    copy.setDate(date.getDate() + days);
    return copy;
  }
  let dateExpired = new Date();
  //console.log("dateExpired", dateExpired);
  const handleEmpruntCondition = () => {
    if (
      EmpruntConditionToUpdate === "Noemprun" ||
      EmpruntConditionToUpdate === ""
    ) {
      let dateObj = new Date();
      let month = String(dateObj.getMonth() + 1).padStart(2, "0");
      let day = String(dateObj.getDate()).padStart(2, "0");
      let year = dateObj.getFullYear();
      let hours = dateObj.getHours();
      let minutes = dateObj.getMinutes();
      let secondes = dateObj.getSeconds();

      let date_Retour = addDays(dateObj, 10);
      let monthRetourLivre = String(date_Retour.getMonth() + 1).padStart(
        2,
        "0"
      );
      let dayRetourLivre = String(date_Retour.getDate()).padStart(2, "0");
      let yearRetourLivre = date_Retour.getFullYear();
      let hoursRetourLivre = date_Retour.getHours();
      let minutesRetourLivre = date_Retour.getMinutes();
      let secondesRetourLivre = date_Retour.getSeconds();
      let EmpruntConditionToUpdate = "emprun";
      let dateEmpruntToUpdate =
        day +
        "/" +
        month +
        "/" +
        year +
        "/" +
        hours +
        ":" +
        minutes +
        ":" +
        secondes;

      let dateRetourLivreToUpdate =
        dayRetourLivre +
        "/" +
        monthRetourLivre +
        "/" +
        yearRetourLivre +
        "/" +
        hoursRetourLivre +
        ":" +
        minutesRetourLivre +
        ":" +
        secondesRetourLivre;

      //console.log("dateajut", dateRetourLivreToUpdate);
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

      alert("Now Book became emprunted ");
    }

    if (EmpruntConditionToUpdate === "emprun") {
      //console.log(dateRetourLivreToUpdate, "uii", dateExpired);
      let dateod = new Date(dateRetourLivreToUpdate);
      //console.log(dateod, "uii", dateExpired);

      if (dateExpired > dateod) {
       // console.log("ok");

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
      }
    }
  };

  return (
    <>
      <div className="w3-container">
        {!updateMode ? (
          <div className="w3-panel w3-card">
            <div className="details-container">
              <h6>
                <ul>
                  <li>Libelle : {libelle} __</li>
                  <li>Nombre : {nbExemplaire}___</li>
                  <li>Etat : {condition}___</li>
                  <li>Emprunt : {EmpruntCondition}</li>
                  <div></div>
                </ul>
              </h6>
            </div>

            <div className="actions">
              <ButtonGroup className="mr-2" aria-label="Second group">
                <Button data-testid="ShowModalBtn" variant="primary" onClick={handleShow}>
                  <i className="glyphicon glyphicon-eye-open"></i>
                </Button>
                <Button data-testid="updateBtn" variant="success" onClick={() => setUpdateMode(true)}>
                  <i className=" glyphicon glyphicon-edit"></i>
                </Button>
                <Button data-testid="deletebtn" variant="danger" onClick={() => deleteBook(id)}>
                  <i className="glyphicon glyphicon-trash"></i>
                </Button>
                <Button data-testid="archivedbtn" variant="warning" onClick={handleArchive}>
                  <i className="glyphicon glyphicon-paste"></i>
                </Button>
                <Button data-testid="Empruntbtn" className="emprunt" onClick={handleEmpruntCondition}>
                  <i className="glyphicon glyphicon-upload"></i>
                </Button>
              </ButtonGroup>
            </div>
          </div>
        ) : (
          <div className="w3-panel w3-card">
            <div className="details-container">
              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Libelle</Form.Label>
                    <Form.Control
                      type="text"
                      name="libelle"
                      value={libelleToUpdate}
                      onChange={(e) => setLibelleToUpdate(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Auteur</Form.Label>
                    <Form.Control
                      type="text"
                      name="auteur"
                      value={auteurToUpdate}
                      onChange={(e) => setAuteurToUpdate(e.target.value)}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Edition</Form.Label>
                    <Form.Control
                      type="text"
                      name="edition"
                      value={editionToUpdate}
                      onChange={(e) => setEditionToUpdate(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Nombre d'exemplaire</Form.Label>
                    <Form.Control
                      type="number"
                      name="nbExemplaire"
                      value={nbExemplaireToUpdate}
                      onChange={(e) => setNbExemplaireToUpdate(e.target.value)}
                    />
                  </Form.Group>
                </Form.Row>
                <Button
                  data-testid="updateBook"
                  type="submit"
                  variant="success"
                  onClick={handleUpdateBook}
                >
                  <i className=" glyphicon glyphicon-edit"></i> Update a Book
                </Button>{" "}
              </Form>
            </div>
          </div>
        )}
      </div>
      <div>
        {!deatilsMode ? (
          <div> </div>
        ) : (
          <>
            <ModalBook
              showh={show}
              libelle={libelle}
              auteur={auteur}
              edition={edition}
              nbExemplaire={nbExemplaire}
              condition={condition}
              dateEmprunt={dateEmprunt}
              dateRetourLivreToUpdate={dateRetourLivreToUpdate}
            />
          </>
        )}
      </div>
    </>
  );
}
