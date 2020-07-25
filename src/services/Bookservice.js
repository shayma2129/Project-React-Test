export const listBooks=[
  {
    id: 1,
    libelle: "Les Misérables, tome 1",
    auteur: "Victor Hugo",
    edition: 1000,
    nbExemplaire: 15000,
    condition:"Noarchived",
    EmpruntCondition:"emprun",
    dateEmprunt:"thur Jul 3 2020 15:22:16 GMT+0100",
    dateRetourLivre:"Mon Jul 18 2020 13:45:59 GMT+0100"
  },
  {
    id: 2,
    libelle: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    edition: 800,
    nbExemplaire: 25000,
    condition:"Noarchived",
    EmpruntCondition:"Noemprun",
    dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
    dateRetourLivre:""
  },
  {
    id: 3,
    libelle: "Le Rouge et le Noir",
    auteur: "Stendhal",
    edition: 200,
    nbExemplaire: 5420,
    condition:"archived",
    EmpruntCondition:"Noemprun",
    dateEmprunt:"Wed Apr 11 2001 01:00:00 GMT+0100",
    dateRetourLivre:""
  },
  {
    id: 9,
    libelle: "Sur le chemin de ma vie",
    auteur: " Mitakuye Oyasin",
    edition: 800,
    nbExemplaire: 1000,
    condition:"Noarchived",
    EmpruntCondition:"Noemprun",
    dateEmprunt:"",
    dateRetourLivre:""
  },
];


export const getBookById =  (listBooks,bookId) => {
  return listBooks.find((book) => book.id === bookId);
};

export const searchBooks =  (searchValue) => {
  const result = listBooks.filter((book) => book.libelle.includes(searchValue));
  return result
};
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export const fetchBooks = async searchValue => {
  await delay(2000)
  let list = listBooks.filter(book => book.libelle.includes(searchValue))
  //console.log("list",list)
  return list
}
export  const addBook = ( libelle, auteur, edition, nbExemplaire, condition,EmpruntCondition,dateEmprunt,dateRetourLivre) => {
  listBooks.push({
    id: listBooks.length + 1,
    libelle,
    auteur,
    edition,
    nbExemplaire,
    condition,
    EmpruntCondition,dateEmprunt,dateRetourLivre
  })
};

export const updateBook = (id,libelle,auteur,edition,nbExemplaire,condition,EmpruntCondition,dateEmprunt,dateRetourLivre) => {
  const newBooks = listBooks.map((book) =>
    book.id === id
      ? {id, libelle, auteur, edition, nbExemplaire, condition,EmpruntCondition,dateEmprunt,dateRetourLivre }
      : book
  );
 return newBooks
};
export const deleteBook = (id) => {
  const newBooks = listBooks.filter((book) => book.id !== id);
  return newBooks;
};
export const updateConditionBook = (id,libelle,auteur,edition,nbExemplaire,condition,EmpruntCondition,dateEmprunt,dateRetourLivre) => {
  const newBooks = listBooks.map((book) =>
    book.id === id
      ? { id, libelle, auteur, edition, nbExemplaire, condition,EmpruntCondition,dateEmprunt,dateRetourLivre }
      : book
  );
  return newBooks;
};
