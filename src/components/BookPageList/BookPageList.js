import React, { useState, useEffect } from "react";
import "./BookPageList.css";
import Menu from "../Menu/Menu";
import BookListCard from "../BookListCard/BookListCard";
import { listBooks, fetchBooks, fetchBooksByAuthor } from "../../services/Bookservice.js";

export default function BookPageList({
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

  const [books, setBooks] = useState([]);

  const updateEmpruntConditionBook = (
    id,
    libelle,
    auteur,
    edition,
    nbExemplaire,
    condition,
    EmpruntCondition,
    dateEmprunt,
    dateRetourLivre
  ) => {
    const newBooks = books.map((book) =>
      book.id === id
        ? {
            id,
            libelle,
            auteur,
            edition,
            nbExemplaire,
            condition,
            EmpruntCondition,
            dateEmprunt,
            dateRetourLivre,
          }
        : book
    );
    setBooks(newBooks);
  };
  const [searchValue, setSearchValue] = useState("");
  const [searchValueAuteur, setsearchValueAuteur] = useState("");
  const [loading, setLoading] = useState(false);

  const [isVisible] = useState(true);

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setLoading(true);
      if (!searchValue) {
        setBooks(listBooks);
        setLoading(false);
      } else {
        const result = await fetchBooks(searchValue);
        //console.log("result: ", didCancel);
        if (!didCancel) {
          setBooks(result);
          //console.log(result);
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => {
      //console.log("cleanup: ", searchValue);
      didCancel = true;
    };
  }, [searchValue]);


  
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setLoading(true);
      if (!searchValueAuteur) {
        setBooks(listBooks);
        setLoading(false);
      } else {
        const result = await fetchBooksByAuthor(searchValueAuteur);
        //console.log("result: ", didCancel);
        if (!didCancel) {
          setBooks(result);
          //console.log(result);
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => {
      //console.log("cleanup: ", searchValue);
      didCancel = true;
    };
  }, [searchValueAuteur]);
  return (
    <div className="BookPageList">
      <Menu />
      <div>
        <input
          className="searchInput"
          type="search"
          name="search"
          placeholder="search here by book's name ........"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />{" "}
        <i className="fa fa-search"></i>
      </div>

      <div>
        <input
          className="searchInput"
          type="search"
          name="search"
          placeholder="search here by author's name ........"
          value={searchValueAuteur}
          onChange={(e) => setsearchValueAuteur(e.target.value)}
        />{" "}
        <i className="fa fa-search"></i>
      </div>

      {loading ? (
        <div>Loading ... </div>
      ) : (
        isVisible && (
          <BookListCard
            books={books}
            updateEmpruntConditionBook={updateEmpruntConditionBook}
          />
        )
      )}
    </div>
  );
}
