import React from 'react';
import Emprunt from '../Emprunt/Emprunt.js';
export default function EmpruntList({books,updateEmpruntConditionBook}) {
  const mystyle = {
    marginLeft: "300px",
    marginTop:"20px",

  };
  return (
   <>
   <div className="EmpruntList" style={mystyle}>
   <div className="row">

     {
       books.map(book => (
         <Emprunt 
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

         updateEmpruntConditionBook={updateEmpruntConditionBook}

         >

         </Emprunt>
        ))
     }
   </div>
  </div>
  

   </>
  );
}


