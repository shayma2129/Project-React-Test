import React, { useState } from "react";
import "./BookPage.css";
import BooksList from "../BooksList/BooksList.js";
import BookForm from "../BookForm/BookForm.js";
import { listBooks } from "../../services/Bookservice.js";

export default function BookPage() {
  const [books, setBooks] = useState(listBooks);
  const addBook = async( libelle, auteur, edition, nbExemplaire, condition,EmpruntCondition,dateEmprunt,dateRetourLivre) => {
   await setBooks([
      ...books,
      {
        id: books.length + 1,
        libelle,
        auteur,
        edition,
        nbExemplaire,
        condition,EmpruntCondition,dateEmprunt,dateRetourLivre
      },
    ]);
  };
  const deleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };
  const updateBook = (id,libelle,auteur,edition,nbExemplaire,condition,EmpruntCondition,dateEmprunt,dateRetourLivre) => {
    const newBooks = books.map((book) =>
      book.id === id
        ? { libelle,auteur,edition,nbExemplaire,condition,EmpruntCondition,dateEmprunt,dateRetourLivre }
        : book
    );
    setBooks(newBooks);
  };
  const updateConditionBook = (
    id,
    libelle,
    auteur,
    edition,
    nbExemplaire,
    condition
  ) => {
    const newBooks = books.map((book) =>
      book.id === id
        ? { id, libelle, auteur, edition, nbExemplaire, condition }
        : book
    );
    setBooks(newBooks);
  };
  const updateEmpruntConditionBook = (
    id,
    libelle,
    auteur,
    edition,
    nbExemplaire,
    condition,
    EmpruntCondition,dateEmprunt,dateRetourLivre
  ) => {
    const newBooks = books.map((book) =>
      book.id === id
        ? { id, libelle, auteur, edition, nbExemplaire, condition,EmpruntCondition ,dateEmprunt,dateRetourLivre}
        : book
    );
    setBooks(newBooks);
  };
  return (
    <>
      <BookForm addBook={addBook} />
      <BooksList
        books={books}
        deleteBook={deleteBook}
        updateConditionBook={updateConditionBook}
        updateBook={updateBook}
        updateEmpruntConditionBook={updateEmpruntConditionBook}
      />
    </>
  );
}
