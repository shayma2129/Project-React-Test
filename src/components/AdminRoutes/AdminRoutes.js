import React, { useState } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Admindashboard from "./AdminDashboard/admindashboard.js";
import MembersList from "../MembersList/MembersList.js";
import { listUsers } from "../../services/Userservice.js";
import { listBooks } from "../../services/Bookservice.js";
import BookPage from "../BookPage/BookPage.js";
import EmpruntList from "../EmpruntList/EmpruntList.js";

export default function AdminRoutes() {
  let { path } = useRouteMatch();
  const [users, setUsers] = useState(listUsers);
  const [books, setBooks] = useState(listBooks);
  const updateUser = (
    id,
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    loggedIn,
    permission
  ) => {
    const newUsers = listUsers.map((user) =>
      user.id === id
        ? {
            id,
            firstname,
            lastname,
            email,
            password,
            confirmPassword,
            loggedIn,
            permission,
          }
        : user
    );
    setUsers(newUsers);
  };
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
  return (
    <>
      <div>
        <Admindashboard>
          <Switch>
            <Route exact path={`${path}/`}>
              <Redirect to={`${path}/admin`} />
            </Route>
            <Route exact path={`${path}/admin`}></Route>
            <Route exact path={`${path}/Members`}>
              <MembersList users={users} updateUser={updateUser} />
            </Route>
            <Route exact path={`${path}/Books`}>
              <BookPage />
            </Route>
            <Route exact path={`${path}/Emprunt`}>
              <EmpruntList
                books={books}
                updateEmpruntConditionBook={updateEmpruntConditionBook}
              />
            </Route>
            <Route exact path={`${path}/`}>
              <Admindashboard />
            </Route>
          </Switch>
        </Admindashboard>
      </div>
    </>
  );
}
