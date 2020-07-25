import React from "react";
import "./BookListCard.css";
import BookCard from "../BookCard/BookCard";

export default function BookListCard({
  books,
  EmpruntBook,
  updateEmpruntConditionBook,
}) {
  const mystyle = {
    marginLeft: "250px",
    marginTop: "20px",
  };
  return (
    <div className="BooksListCard" style={mystyle}>
      <div className="row">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            libelle={book.libelle}
            auteur={book.auteur}
            edition={book.edition}
            nbExemplaire={book.nbExemplaire}
            condition={book.condition}
            EmpruntCondition={book.EmpruntCondition}
            dateEmprunt={book.dateEmprunt}
            dateRetourLivre={book.dateRetourLivre}
            EmpruntBook={EmpruntBook}
            updateEmpruntConditionBook={updateEmpruntConditionBook}
          ></BookCard>
        ))}
      </div>
    </div>
  );
}
