import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../Slide/slide1.jpg";
export default function Profile({cartItems}) {
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

  const CardRow = {
    marginLeft: "410px",
    marginTop: "40px",
  };
  return (
    <div className="Profile row" style={CardRow}>
      {cartItems
        .map((book) => (
          <div className="col-4">
            <Card style={mystyle}>
              <Card.Img style={image} variant="top" src={img1} />
              <Card.Body>
                <Card.Title style={TitleStyle}>
                  {book.libelleToUpdate}
                </Card.Title>
                <Card.Text style={TextCardAuteur}>
                  Auteur : {book.auteurToUpdate}
                </Card.Text>
                <Card.Text style={TextCard}>
                  <li>Nombre d'exemplaire : {book.nbExemplaireToUpdate} </li>

                  <li>Edition : {book.editionToUpdate} </li>
                </Card.Text>
                <Card.Text style={TextCard}>
                  <li>Date Emprunt Livre: {book.dateEmpruntToUpdate} </li>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text style={TextCard}>
                  <li>Etat Actuelle : {book.conditionToUpdate} </li>
                </Card.Text>
              </Card.Footer>
            </Card>
          </div>
        ))
        .slice(0, 2)}
    </div>
  );
}
