import React from "react";
import Menu from "../Menu/Menu";
import Profile from "../Profile/profile";

export default function ProfileList({
  id,
  libelleToUpdate,
  auteurToUpdate,
  editionToUpdate,
  nbExemplaireToUpdate,
  conditionToUpdate,
  EmpruntConditionToUpdate,
  dateEmpruntToUpdate,
  dateRetourLivreToUpdate,
}) {
  //const [books, setBooks] = useState(listBooks);

  if (localStorage.getItem("productsInCart") === null) {
    var cartItems = {};
    var items = [];
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

  return (
    <div className="ProfileList">
      <Menu />
      <Profile  cartItems={cartItems.items} />
    </div>
  );
}
