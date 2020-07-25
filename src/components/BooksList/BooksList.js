import React from 'react';
import './BooksList.css';
import Book from '../Book/Book.js';
export default function BooksList({books,updateEmpruntConditionBook,deleteBook,updateBook,updateConditionBook}) {
  return (
   <>
   <div className="BooksList">
     {
       books.map(book => (
         <Book 
         key={book.id}
         id={book.id}
         libelle={book.libelle}
         auteur={book.auteur}
         edition={book.edition}
         nbExemplaire={book.nbExemplaire}
         condition={book.condition}
         dateEmprunt={book.dateEmprunt}
         dateRetourLivre={book.dateRetourLivre}
         EmpruntCondition={book.EmpruntCondition}
         deleteBook={deleteBook}
         updateBook={updateBook}
         updateConditionBook={updateConditionBook}
         updateEmpruntConditionBook={updateEmpruntConditionBook}
         >
         </Book>
        ))
     }
   </div>
   </>
  );
}