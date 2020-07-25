import React, { useState } from "react";
import "./BookCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import img1 from "../Slide/slide1.jpg";

export default function BookCard({
  id,
  libelle,
  auteur,
  edition,
  nbExemplaire,
  condition,
  EmpruntCondition,
  dateEmprunt,
  dateRetourLivre,
  updateEmpruntConditionBook
}) {
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
  const [errormsg,setErrorMsg]=useState(false);
  var cartItems = {};
  var items = [];
  cartItems.items = items;

  function addDays(date, days) {
    const copy = new Date(Number(date));
    copy.setDate(date.getDate() + days);
    return copy;
  }
 // let dateExpired = new Date();
  let x = localStorage.getItem("book_emprunt");
  const handleEmpruntCondition = () => {
    if (
      EmpruntConditionToUpdate === "Noemprun" ||
      EmpruntConditionToUpdate === ""
    ) {
      if (Number(x) < 2) {
        localStorage.setItem("book_emprunt", Number(x) + 1);
        let dateObj = new Date();
        let month = String(dateObj.getMonth() + 1).padStart(2, "0");
        let day = String(dateObj.getDate()).padStart(2, "0");
        let year = dateObj.getFullYear();
        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        let secondes = dateObj.getSeconds();

        let date_Retour = addDays(dateObj, 15);
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

        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      } else {
        alert("tu as eprunter deja deux");
        setErrorMsg(true);
      }
    }

    if (EmpruntConditionToUpdate === "emprun") {
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

      alert("ce livre est en emprunt ");
    }
  };

  if (localStorage.getItem("productsInCart") === null) {
    cartItems.items = items;
  } else {
    cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  }

  var details = {
    id,
    libelleToUpdate,
    auteurToUpdate,
    editionToUpdate,
    nbExemplaireToUpdate,
    conditionToUpdate,
    EmpruntConditionToUpdate,
    dateEmpruntToUpdate,
    dateRetourLivreToUpdate,
  };
  cartItems.items.push(details);
  const mystyle = {
    fontFamily: "Arial",
    width: "300px",
    height: "480px",
    marginBottom: "20px",
  };

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
    marginRight: "90px",
  };
  const buttonStyle = {
    backgroundColor: "#d2e30d",
    borderColor: "#d2e30d",
  };

  return (
    <div className="BookCard">
      <div className="col-6">
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
              <li>Etat Actuelle : {condition} </li>
              {errormsg ===true &&( <li className="error-msg" aria-label="error-msg">
             You have also two emprunt</li>)}
            </Card.Text>
           
          </Card.Body>
          <Card.Footer>
            <small className="text-muted" style={spaceBetween}>
              Etat : {EmpruntConditionToUpdate}
            </small>
           
            <Button style={buttonStyle} data-testid="Emprunt" onClick={handleEmpruntCondition}>
              Emprunt
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
